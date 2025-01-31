# Configuração da Instância EC2 para a API

## 1. Criando a Instância EC2

### Passo 1: Criar uma VPC
1. No menu de pesquisa do console AWS, procure por **VPC**.
2. Clique em **Criar VPC** e selecione a opção **VPC e muito mais**.
3. Digite um nome para a sua VPC.
4. No final da tela, clique em **Criar VPC**.

### Passo 2: Criar um Grupo de Segurança
1. No menu de pesquisa, procure por **Grupo de Segurança**.
2. Clique em **Criar grupo de segurança**.
3. Defina um nome e selecione a VPC criada anteriormente.
4. No final da tela, clique em **Criar grupo de segurança**.

### Passo 3: Criar a Instância EC2
1. No [AWS Management Console](https://aws.amazon.com/console/), selecione **EC2**.
2. Clique em **Executar Instância**.
3. Escolha a AMI **Ubuntu Server 22.04 LTS** (ou versão mais recente estável).
4. Escolha o tipo da instância:
   - **t2.micro** (1 vCPU, 1GB RAM) para desenvolvimento/teste (grátis para contas elegíveis).
   - Para produção, escolha conforme a necessidade.

### Passo 4: Configurar a Rede
1. Selecione a VPC criada anteriormente.
2. Escolha a sub-rede com **public** no nome, exemplo: `{nome da sua VPC}-subnet-public`.
3. Habilite **Atribuir IP público**.
4. Selecione **Selecionar grupo existente** e escolha o grupo de segurança criado anteriormente.

### Passo 5: Adicionar Armazenamento
1. O padrão é **8GB** de SSD (EBS), ajuste conforme necessário.
2. Clique em **Avançar**.

### Passo 6: Criar e Associar Chave SSH
1. Escolha **Criar novo par de chaves** ou use um existente.
2. Baixe o arquivo `.pem` e guarde-o em um local seguro.
3. Clique em **Executar Instância**.

---

## 2. Conectando-se à Instância via SSH
1. No terminal, navegue até a pasta onde está sua chave SSH.
2. Execute:
   ```sh
   ssh -i "seu-arquivo.pem" ubuntu@seu-ip-publico
   ```
   - Substitua `seu-arquivo.pem` pelo caminho correto do arquivo.
   - Substitua `seu-ip-publico` pelo IP da sua instância.

---

## 3. Configurando o Ambiente

### Passo 1: Atualizar o sistema
```sh
sudo apt update && sudo apt upgrade -y
```

### Passo 2: Instalar o Docker
```sh
sudo apt install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker
```

### Passo 3: Configurar chave SSH para acesso ao GitHub
```sh
ssh-keygen -t rsa -b 4096 -C "seu-email@example.com"
cat ~/.ssh/id_rsa.pub
```

### Passo 4: Adicionar a chave SSH ao GitHub
1. Acesse **GitHub > Settings**.
2. Clique em **SSH and GPG keys**.
3. Clique em **New SSH key**.
4. Nomeie a chave e cole a chave gerada.
5. Clique em **Add SSH key**.

### Passo 5: Clonar o repositório do projeto
```sh
git clone git@github.com:ViniciusVezono/D03_AWS_FULLSTACK_NOV24.git
```

### Passo 6: Entrar na pasta do projeto
```sh
cd D03_AWS_FULLSTACK_NOV24
```

### Passo 7: Entrar na pasta da API
```sh
cd GreenSphere-api
```

### Passo 8: Inicializar o container da API
```sh
sudo docker-compose up -d api
```

---

## Agora sua API está rodando na instância EC2 da AWS!

