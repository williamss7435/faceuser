import { Container, CardHeader, CardActions, CardButton } from "./styles";

import {FaEdit, FaTrashAlt} from 'react-icons/fa';

export default function UserCardComponent({user, onEdit, onDelete}){

    return (
        <Container>
            <CardHeader>
                {
                    (user.photo ?
                        <img src={user.photo.path} alt={user.name}/>:
                        <img src='' alt=""/>
                    )
                }
                <span>#{user.id}</span>
                <div>{user.name}</div>
                <small>Data de Nasc: {user.birth_date_formatted}</small>
            </CardHeader>
            <CardActions>
                <CardButton className="btn-edit" onClick={onEdit}>
                    <FaEdit></FaEdit>
                    <span>Editar</span>
                </CardButton>
                <CardButton className="btn-delete" onClick={onDelete}>
                    <FaTrashAlt></FaTrashAlt>
                    <span>Excluir</span>
                </CardButton>
            </CardActions>
        </Container>
    );

}