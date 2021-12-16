import {DashboardBackground, BodyContainer, InlineContainer, InlineTitle} from './styles';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';

import Statement from './Statement';
import { useEffect } from 'react';

const Dashboard = () => {

    const {user, getCurrentUser} = useAuth();
    const wallet = user.wallet;

    useEffect(()=>{
        getCurrentUser()
    },[])

    if(!user) {
        return null;
    }

    return (
        <DashboardBackground>
            <Header />
            <BodyContainer>
                <div>
                   <Card noShadow width="90%">
                       <InlineTitle>
                        <h2 className="h2">Saldo Atual</h2>
                       </InlineTitle>
                       <InlineContainer>
                            <h3 className="wallet">
                                {wallet.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                            </h3>
                        </InlineContainer>
                   </Card>
                   <Card noShadow width="90%">
                       <InlineTitle>
                        <h2 className="h2">Receber PIX</h2>
                       </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex:1}}/>
                            <Button>Gerar código</Button>
                        </InlineContainer>
                        
                            <p className="primary-color">Pix copia e cola:</p>
                            <p className="primary-color">asd10asd1asd1as4d1asd4</p>
                        
                   </Card>
                   <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                        <Input/>
                        <Button>Pagar PIX</Button>
                        </InlineContainer>
                   </Card>
                </div>
                <div>
                    <Card noShadow width="90%">
                      <InlineTitle>
                      <h2 className="h2">Extrato da conta</h2>
                      </InlineTitle>
                      <Statement />
                   </Card>
                </div>
            </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard