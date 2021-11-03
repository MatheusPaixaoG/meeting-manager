Feature: criação de reuniões
	As a usuário
	I want to criar reuniões com participantes convidados
	So que eu possa compartilhar informações privada com eles

	Scenario: Criação de reunião bem sucedida
		Given que estou na página "criação de reunião"
		And os usuários "pedro12" e "joao12" estão cadastrados sistema
		And a data atual é "10/11/2021" e o horário atual é "08:00"
		And o limite de participantes para uma reunião é de "2" usuários
		When solicito a criação de uma reunião com "pedro12" e "joao12"
		And seleciono para reunião a data "11/11/21" e o horário "08:00"
		Then uma mensagem de confirmação da criação é mostrada na tela
	
	Scenario: Criação de reunião com usuário não cadastrado
		Given que estou na página "criação de reunião"
		And os usuários "pedro12" e "joao12" estão cadastrados sistema
		When solicito a criação de uma reunião com "pedro12" e "vitoria12"
		Then uma mensagem de erro é mostrada na tela
	
	Scenario: Criação de reunião com limite de participantes excedido
		Given que estou na página "criação de reunião"
		And os usuários "pedro12", "joao12" e "vitoria12" estão cadastrados sistema
		And o limite de participantes para uma reunião é de "2" usuários
		When solicito a criação de uma reunião com "pedro12", "joao12" e "vitoria12"
		Then uma mensagem de erro é mostrada na tela
	
	Scenario: Criação de reunião com data inválida
		Given que estou na página "criação de reunião"
		And os usuários "pedro12" e "joao12" estão cadastrados sistema
		And a data atual é "10/11/2021" e o horário atual é "08:00"
		When solicito a criação de uma reunião com "pedro12" e "joao12"
		Then não consigo selecionar datas anteriores a "10/11/2021"	ás "08:00" horas
