Feature: criação de reuniões
	As a usuário
	I want to criar reuniões com participantes convidados
	So que eu possa compartilhar informações privada com eles

	Scenario: Criação de reunião bem sucedida
		Given que estou na página "criação de reunião"
		And os usuários "pedro123" e "joao123" estão cadastrados sistema
		And a data atual é "10/11/2021" e o horário atual é "08:00"
		And o limite de participantes para uma reunião é de "2" usuários
		When solicito a criação de uma reunião com "pedro123" e "joao123"
		And seleciono para reunião a data "11/11/21" e o horário "08:00"
		Then uma mensagem de confirmação da criação é mostrada na tela
	
	Scenario: Criação de reunião com usuário não cadastrado
		Given que estou na página "criação de reunião"
		And os usuários "pedro123" e "joao123" estão cadastrados sistema
		When solicito a criação de uma reunião com "pedro123" e "vitoria123"
		Then uma mensagem de erro é mostrada na tela