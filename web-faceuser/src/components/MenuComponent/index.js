import {Container, MenuButton, MenuTittle} from './styles';

export default function MenuComponent({items}){
    
    return (
        <Container>
            <div>
                <MenuTittle>Menu</MenuTittle>
                {
                    items.map((item, index) => {
                        return (
                            <MenuButton onClick={item.onClick} key={index}>
                                {item.icon}
                                <span>{item.name}</span>
                            </MenuButton>   
                        );
                    })
                }
            </div>
           
        </Container>
    );

}