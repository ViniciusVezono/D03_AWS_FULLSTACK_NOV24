# Configuração do Deploy do Frontend no S3

## Configurar Build do Projeto

### Passo 1: Acesse o diretório do projeto e instale as dependências

```bash
cd GreenSphere-web
npm install
```

### Passo 2: Construir o projeto

```bash
npm run build
```

## Criação do Bucket no S3

### Passo 1: Criar um Bucket no Amazon S3

1. Acesse o console AWS e vá para o serviço S3.
2. Clique em **Criar bucket**.
3. Insira um nome único para o bucket (exemplo: `meu-app-react-deploy`).
4. Escolha a região desejada.
5. Em **Configurações de objetos públicos**, desmarque **"Bloquear todo o acesso público"** caso deseje permitir acesso público.
6. Role até o final da página e clique em **Criar bucket**.

### Passo 2: Configurar para Site Estático

1. Clique em **Propriedades** no bucket selecionado.
2. Procure por **"Hospedagem de site estático"**.
3. Clique em **Editar**.
4. Selecione a opção **Ativar** em **Hospedagem de site estático**.
5. Em **Documento de índice**, digite `index.html`.
6. Clique em **Salvar alterações**.

### Passo 3: Configurar o CORS no S3

1. No console da AWS, acesse o Amazon S3.
2. Selecione o seu bucket.
3. Acesse a aba **Permissions** → **Cross-Origin Resource Sharing (CORS)**.
4. Adicione a seguinte política (ajuste conforme necessário):
   ```json
   [
       {
           "AllowedHeaders": ["*"],
           "AllowedMethods": ["GET", "POST", "PUT", "DELETE"],
           "AllowedOrigins": ["*"],
           "ExposeHeaders": []
       }
   ]    
   ```

### Passo 4: Configurar a Política do Bucket

1. Acesse a aba **Permissões** → **Política do bucket**.
2. Clique em **Editar**.
3. Adicione a seguinte política (substitua `SEU_BUCKET_NAME` pelo nome do seu bucket):
   ```json
   {
       "Version": "2012-10-17",
       "Statement": [
           {
               "Sid": "AllowPublicAccess",
               "Effect": "Allow",
               "Principal": "*",
               "Action": "s3:GetObject",
               "Resource": "arn:aws:s3:::SEU_BUCKET_NAME/*"
           }
       ]
   }
   ```
4. Clique em **Salvar alterações**.

### Passo 5: Adicionar a Build do Projeto ao Bucket

1. Clique no bucket que foi criado.
2. Clique na opção **Carregar**.
3. Clique em **Adicionar arquivos**.
4. Navegue até a pasta `dist` gerada pelo build do projeto.
5. Selecione os arquivos disponíveis.
6. Clique em **Adicionar pasta** e selecione a pasta `assets` da build.
7. Após selecionar os arquivos e a pasta, clique em **Carregar**.

### O Bucket foi criado e está pronto para ser acessado! 🚀

    