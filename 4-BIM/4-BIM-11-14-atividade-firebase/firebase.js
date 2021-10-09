//           FIREBASE

//O Firebase é um conjunto de serviços que funciona juntamente com o google cloud e serve principalmentepara desenvolvedores de aplicações mobile. Com ele tu podes alterar o backend através do frontend com esses serviços que o Firebase oferece.

//           Serviços

//Analytics - Serve para fazer uma análize do comportamento dos usuários ou links diretos

//Realtime database - Permite o armazenamento e sincronismo dos dados entre usuários e dispositivos em tempo real com um banco de dados No SQL hospedado na nuvem. Os dados atualizados são sincronizados em todos os dispositivos conectados em segundos. Além disso, seus dados permanecem disponíveis caso seu aplicativo fique offline, o que oferece uma ótima experiência do usuário, independentemente da conectividade de rede.

//Authentication - O Firebase Auth oferece diversos métodos de autenticação, como e-mail/senha, provedores de terceiros, como o Google ou Facebook, Login Anônimo, Confirmação via SMS, ou o uso direto do seu sistema de contas. O gerenciamento de usuários se torna simples e seguro.

//Cloud Messaging - O Firebase Cloud Messaging (FCM) oferece o envio de mensagens e notificações gratuitamente para usuários. As mensagens podem ser enviadas para dispositivos únicos, grupos de dispositivos, segmentos de usuários ou tópicos específicos.

//Storage - O Firebase Cloud Storage permite que você armazene e compartilhe facilmente imagens, áudio, vídeo ou outro conteúdo gerado pelos usuários usando um armazenamento de objetos poderoso, simples e econômico criado para a escala do Google. Os SDKs do Firebase para Cloud Storage adicionam a segurança do Google aos uploads e downloads de arquivo dos seus aplicativos do Firebase, independentemente da qualidade da rede.

//AdMob - A AdMob do Google é uma plataforma de publicidade que pode ser usada para gerar receita com sua aplicação. O uso da AdMob com o Google Analytics para Firebase fornece recursos adicionais de dados e recursos de análise de aplicativos.

//Suas vantagens são a de possuir uma estrutura pronta, ter rápida implementação, segurança, múltiplas ferramentas e fácilmente escalável.

//É bom usar Firebase quando: 
// -você precisa criar um produto mínimo viável pois é possível focar no desenvolvimento do front-end, isso torna o processo mais rápido, simples e barato do que criar todo o back-end.
// -Pequenas Aplicações/Aplicações Pessoais
// -Quando você precisa criar uma aplicação demonstração e não é necessário criar todo o back-end, você pode usar o Firebase, agilizando esse processo. 

//SDK - é um Software Development Kit que serve para a criação de apps e faz a ponte entre os serviços do Firebase e as aplicações.

//A função do Back end é a de gerenciar os dados do site, como armazenar senhas, emails, dados do usuário, etc...

//Firebase no ReactJS - Nele o SDK a ser usado é o SDK Javascript, pois o ReactJS atua do lado do cliente (browser) e com o SDK Javascript a aplicação consegue enviar as requisições através das funções pré-definidas do SDK para o Firebase.

//Firebase no React Native - Já para o React Native não há um SDK próprio para uso, o que muitos fazem é utilizar o SDK Javascript no React Native, afinal ambos tem por trás a linguagem Javascript.

//Firebase no NodeJS - Nessa situação não faz muito sentido o uso do Firebase, visto que o NodeJS por sua vez é usado para criação do back-end de uma aplicação, que é justamente o que o Firebase oferece. Não é impossível utilizá - lo no NodeJS, porém seria desperdício de performance pois o NodeJS atuaria como um "middleware" pro Firebase.