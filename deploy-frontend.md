# Configuração do deploy do frontend no S3 

## Configurar build do projeto

### Passo 1: Acesse o diretório do projeto e instale as dependências 
    
   ```sh
   cd GreenSphere-web
    npm install
   ```

### Passo 2: Construir o projeto
    ```sh
   npm run build
   ``` 

## Criação do bucket no S3 

### Passo 1: Criar um Bucket no Amazon S3

1. Acesse o console AWS e vá para o serviço S3.

2. Clique em Criar bucket.

3. Insira um nome único para o bucket (exemplo: meu-app-react-deploy).

4. Escolha a região desejada.

5. Em Configurações de objetos públicos, desmarque "Bloquear todo o acesso público" caso deseje permitir acesso público.

6. Role até o final da página e clique em Criar bucket.

### Passo 2: Configurar o CORS no S3

1. Vá para o Amazon S3 no console da AWS.
2. Selecione o seu bucket.
3. Vá para a aba Permissions → Cross-origin resource sharing (CORS).
4. Adicione uma política semelhante a esta (ajuste conforme necessário):

### Passo 3: Adicionar a build do projeto no bucket

![Buckets](imagens\print1_S3.png)
1. Clique no bucket que foi criado 

![Bucket_criado](imagens\print2_s3.png)
1. CLique na opção de carregar 
2. Clique em adicionar arquivos 
3. Entre na pasta da build do projeto que vai ser chamado dist
![Build](imagens\print3_s3.jpeg)
1. Selecione os arquivos disponíves 
2. Clique na opção de adicionar pasta e selecione a pasta disponível da build chamada assets
3. Após ter selecionado os arquivos e a pasta da build do projeto. Clique em na opção de carregar 

### Acessar a bucket 
