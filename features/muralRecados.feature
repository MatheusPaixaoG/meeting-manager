Feature: postar recados em um mural
As a usuário
I want to ser capaz de criar recados e postá-los em um mural para cada reunião específica
So que eu possa compartilhar anotações ou mensagens com os outros integrantes da reunião de uma forma simples

Scenario: Criar uma postagem no mural
Given eu estou na página do mural
And eu estou logado na minha conta do gerenciador de reuniões
And eu posso ver as minhas postagens e as dos outros participantes da reunião
When eu clico em "criar nova postagem"
Then uma janela onde eu posso digitar aparece

Scenario: Excluir uma postagem do mural
Given eu estou na página do mural
And eu estou logado na minha conta do gerenciador de reuniões
And eu posso ver as minhas postagens e as dos outros participantes da reunião
When eu clico em qualquer uma das minhas postagens
Then um "X" aparece em um dos cantos, indicando a possibilidade de apagar a postagem
When eu clico no "X"
Then uma mensagem pedindo confirmação se eu quero apagar a mensagem aparece
When eu clico que quero apagar
Then a mensagem é excluída do mural
And eu ainda posso ver o mural
When eu clico em postagens feitas por outras pessoas
Then esse "X" não aparece

Scenario: Mudar de mural
Given eu estou no mural da reunião sobre jogos
And eu estou logado na minha conta do gerenciador de reuniões
And eu consigo ver as postagens no mural da reunião sobre jogos
When eu clico para voltar para a área de escolher o mural
Then a página muda 
And eu posso ver uma lista com todos os murais disponíveis, um para cada reunião que eu participo
When eu clico na reunião sobre smartphones
Then a página muda para o mural da reunião sobre smartphones
And eu posso ver todas as postagens

Scenario: Submeter uma postagem em branco
Given eu estou no mural da reunião sobre jogos
And eu estou logado na minha conta do gerenciador de reuniões
When eu clico em "criar nova postagem"
Then uma janela onde eu posso digitar aparece
And eu não escrevo nada
When eu clico para submeter a mensagem
Then nenhuma nova postagem aparece no mural
And eu ainda posso ver o mural e todas as suas postagens