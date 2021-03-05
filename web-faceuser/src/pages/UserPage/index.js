import React, { useEffect, useState } from 'react';
import {Row, Col, Modal} from 'react-bootstrap';

import MenuComponent from '../../components/MenuComponent';
import UserCardComponent from '../../components/UserCardComponent';
import UserInputCardComponent from '../../components/UserInputCardComponent';
import LoadComponent from '../../components/LoadComponent';

import {Container, NotFoundUserRow, Title} from './styles';
import UserService from '../../services/UserService';
import {FaSignOutAlt, FaUserAlt} from 'react-icons/fa';

import { toast } from 'react-toastify';
import PhotoService from '../../services/PhotoService';
import SearchbarUserComponent from '../../components/SearchbarUserComponent';

export default function UserPage(){

    const [loading, setLoading] = useState(false);
    const [editingUser, setEditingUser] = useState(false);
    const [modalNewUser, setModalNewUser] = useState(false);
    
    const [users, setUsers] = useState([]);
    const [userSelected, setUserSelected] = useState(null);
    const [searchUser, setSearchUser] = useState('');

    
    useEffect(() => {

        (async () => {
            setLoading(true);
            const response = await UserService.find();
    
            if(response.success && response.data)
                setUsers(response.data);
            
            setLoading(false);
        })()

    }, []);

    function editUserHandler(data){
        setUserSelected(data);
        setEditingUser(true);
    }

    function onCancelEditUserHandler(data){
        setEditingUser(false);
    }

    
    function onCancelNewUserHandler(data){
        setModalNewUser(false);
    }

    async function onSearch(query){
        setLoading(true);
        setSearchUser(query);
        const response = await UserService.find(query);
        
        if(response.success){
            setUsers(response.data);
        }else {
            toast.error("Não foi possivel concluir a pesquisa.");
        }

        setLoading(false);
    }

    function newUserHandler(){
        setModalNewUser(true);
    }

    async function deleteUserHandler(user){
        if(window.confirm(`Tem certeza que deseja deletar o usuário ${user.name} ?`)){
            setLoading(true);
            const response = await UserService.delete(user.id);
            setLoading(false);

            if(response.success){

                toast.success("Usuário deletado com sucesso");

                const users = await UserService.find(searchUser);
                if(users.success)
                    setUsers(users.data)

            }else{
                toast.error("Aconteceu um erro ao deletar o usuário.");
            }
        }
    }

    async function saveNewUser(data){
        if(data.name === ''){
            toast.error("Digite um Nome válido!");
            return;
        }

        if(data.birth_date === ''){
            toast.error("Escolha uma data de nascimento!");
            return;
        }
        
        setLoading(true);

        if(data.photo){
            const photo = await PhotoService.upload(data.photo);
            
            if(photo.success){
                data.id_photo = photo.data.id;
            }else {
                toast.error("Erro ao salvar a foto do usuário!");
                return;
            }

        }

        const response = await UserService.save(data);

        setModalNewUser(false);

        if(response.success){
            toast.success("Usuário salvo com sucesso!");

            const users = await UserService.find(searchUser);

            if(users.success)
                setUsers(users.data)

        }else{    
            toast.error("Ocorreu um erro ao salvar o usuário!");
        }
        


        setLoading(false);
    }

    async function editUser(data){
        if(data.name === ''){
            toast.error("Digite um Nome válido!");
            return;
        }

        if(data.birth_date === ''){
            toast.error("Escolha uma data de nascimento!");
            return;
        }
        
        setLoading(true);

        if(data.photo){
            const photo = await PhotoService.upload(data.photo);
            
            if(photo.success){
                data.id_photo = photo.data.id;
            }else {
                toast.error("Erro ao salvar a foto do usuário!");
                return;
            }

        }

        data.id = userSelected.id;
        const response = await UserService.update(data);

        setEditingUser(false);

        if(response.success){
            const users = await UserService.find(searchUser);

                if(users.success)
                    setUsers(users.data)

            toast.success("Usuário salvo com sucesso!");
        }else{    
            toast.error("Ocorreu um erro ao salvar o usuário!");
        }

        setLoading(false);
    }
    
    return (
        <Container>
            {loading && <LoadComponent/>}

            <Row>
                <Col xs={12} lg={2}>
                    <MenuComponent 
                        items={[
                            {
                                name: 'Novo Usuário',
                                onClick: newUserHandler,
                                icon: <FaUserAlt color="#4166b0"/>
                            },
                            //Botão Generico, apenas para não ficar tão vazio
                            {
                                name: 'Sair',
                                onClick: null,
                                icon: <FaSignOutAlt color="#b04141"/>
                            }
                        ]}
                    ></MenuComponent>
                </Col>
                <Col xs={{span: 12}} lg={{span: 8, offset: 1}}  style={{
                    display: (editingUser ? 'none' : 'block'),
                }}>
                    <Title xs={{mt: 1}}>Usuários</Title>
                    <Row>
                        <SearchbarUserComponent onSearch={onSearch}></SearchbarUserComponent>
                    </Row>
                    {
                        users.length > 0 ?
                        (
                            users.map(user => {
                                return (
                                    <Row key={user.id}>
                                        <UserCardComponent 
                                            user={user} 
                                            onEdit={() => editUserHandler(user)}
                                            onDelete={() => deleteUserHandler(user)}
                                        >                      
                                        </UserCardComponent>
                                    </Row>
                                )
                            })
                        ) 
                        :
                        (
                            <NotFoundUserRow>
                                <div>Nenhum usuário encontrado</div>
                            </NotFoundUserRow>
                        )
                    }
                </Col>
                
                {
                    editingUser && 
                    <Col>
                        <UserInputCardComponent
                            OnSave={editUser}
                            OnCancel={onCancelEditUserHandler}
                            user={userSelected}
                        ></UserInputCardComponent>
                    </Col>
                }
                
            </Row>

            <Modal
                size="lg"
                show={modalNewUser}
                onHide={() => {
                    setModalNewUser(false)
                }}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Novo Usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalNewUser && 
                        <UserInputCardComponent 
                            OnSave={saveNewUser}
                            OnCancel={onCancelNewUserHandler}
                        />
                    }
                </Modal.Body>
            </Modal>
        </Container>
        
    );

}