# DApp_Aprendizado
Estudando sobre a criação de contratos inteligentes na rede ETH

## PASSOS PARA RODAR O DEPLOY NA REDE POLYGON ##

### Basic Config 
* Ter a Meta-Mask instalada no navegador e ter criado uma conta(salve a seed).
* Primeiro deve-se configurar a rede testenet da polygon(munbai).
### Project Config 
* Criar um arquivo na raiz "seed.secret" nele deve estar a sua seed-frase da sua conta Meta-Mask.
* Rodar o comando npm install para instalar as dependcias do projeto.
* Instalar o Tuffle em modo global( sudo npm install -g truffle )
* Rodar o comando truffle compile para ver se não tem erros de sintaxe.
* Para fazer o deploy ( truffle migrate --network matic ) 
