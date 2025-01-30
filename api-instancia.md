# Configuração da Instância EC2 para a API

## 1. Criando a Instância EC2

### Passo 1: Acesse o Console da AWS

1. Vá para o [AWS Management Console](https://aws.amazon.com/console/).
2. No menu de serviços, selecione **EC2**.
3. Clique em **Executar Instância**.

### Passo 2: Escolha a Imagem da Máquina (AMI)

1. Selecione **Ubuntu Server 22.04 LTS** (ou a versão mais recente estável para sua aplicação).
2. Clique em **Selecionar**.

### Passo 3: Escolha o Tipo da Instância

1. Para um ambiente de desenvolvimento/teste, escolha **t2.micro** (1 vCPU, 1GB RAM - gratuito para contas elegíveis).
2. Para produção, selecione um tipo adequado conforme a necessidade.

### Passo 4: Configurar Detalhes da Instância

1. Deixe as configurações padrão ou ajuste conforme necessário.
2. Em **Número de instâncias**, deixe **1**.
3. Em **Configuração de Rede**, escolha uma VPC existente ou crie uma nova.
4. Se necessário, habilite um **IP público** para acesso remoto.

### Passo 5: Adicionar Armazenamento

1. O padrão é **8GB** de SSD (EBS), ajuste conforme necessário.
2. Clique em **Avançar**.

### Passo 6: Configurar Segurança (Security Groups)

1. Crie um novo Security Group ou use um existente.
2. Adicione regras para permitir o tráfego:
   - **HTTP (porta 80)** - Para acessar a API via navegador
   - **HTTPS (porta 443)** - Se for usar SSL
   - **SSH (porta 22)** - Para conexão via terminal (apenas seu IP recomendado)
   - **Custom TCP (porta 3000 ou outra usada pela API)**
3. Clique em **Avançar**.

### Passo 7: Criar e Associar Chave SSH

1. Escolha "Criar novo par de chaves" ou use um existente.
2. Baixe o arquivo `.pem` e guarde-o em um local seguro.
3. Clique em **Executar Instância**.

## 2. Conectando-se à Instância via SSH

1. No terminal, vá até a pasta onde está sua chave SSH.

2. Execute o comando:

   ```sh
   ssh -i "seu-arquivo.pem" ubuntu@seu-ip-publico
   ```

   - Substitua `seu-arquivo.pem` pelo caminho correto do arquivo.
   - Substitua `seu-ip-publico` pelo IP da sua instância.

3. Agora você está conectado à sua instância EC2!

---

Próximo passo: **Configurando a API**

1. Execute o comando para atualizar o sistema
   
   ```
   sudo apt update && sudo apt upgrade -y
   ```

2. 
