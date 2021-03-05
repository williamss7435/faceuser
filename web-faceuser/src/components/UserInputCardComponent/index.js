import {Form} from 'react-bootstrap';

import { Container, CardHeader, CardActions, CardButton, CardBody } from "./styles";

import {FaEdit, FaTrashAlt} from 'react-icons/fa';
import { useState } from 'react';

export default function UserInputCardComponent({user ,OnSave, OnCancel, Callback}){

    const [name, setName] = useState((user ? user.name : ''));
    const [birth_date, setBirthDate] = useState((user ? user.birth_date : ''));

    const [photoPreview, setPhotoPreview] = useState(((user && user.photo) ? user.photo.path : ''));
    const [photo, setPhoto] = useState(null);

    async function handlerChangePhoto(event){
        if(event.target.files.length > 0){
            const photoURL = URL.createObjectURL(event.target.files[0])
            setPhotoPreview(photoURL);
            setPhoto(event.target.files);
        }
    }

    function handlerSelectPhoto(){
        document.getElementById('photo').click();
    }

    return (
        <Container>
            <CardHeader>
                <img  onClick={handlerSelectPhoto} className="preview" src={photoPreview} alt=""/>
                <span>Clique para escolher uma foto</span>
                <input readOnly hidden type="file" id="photo" accept=".png, .jpeg, .jpg" onChange={handlerChangePhoto}/>
            </CardHeader>
            <CardBody>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Digite o nome do usuário" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Data De Nascimento</Form.Label>
                    <Form.Control value={birth_date} onChange={(event) => setBirthDate(event.target.value)} type="date" placeholder="Password" />
                </Form.Group>
            </CardBody>
            <CardActions>
                <CardButton className="btn-save" onClick={() => OnSave({name, birth_date, photo})}>
                    <FaEdit></FaEdit>
                    <span>Salvar</span>
                </CardButton>
                <CardButton className="btn-cancel" onClick={() => OnCancel({name, birth_date, photo})}>
                    <FaTrashAlt></FaTrashAlt>
                    <span>Cancelar</span>
                </CardButton>
            </CardActions>
        </Container>
    );

}