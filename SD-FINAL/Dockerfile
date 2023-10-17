# Especifica a imagem base
FROM python:3
# Copia todos os arquivos dentro do diretório atual
# para a pasta app dentro da imagem Docker
COPY . /app
# atribui o diretório de trabalho (raiz)
WORKDIR /app
# executar o comando 
CMD ["python", "-u", "hello-world.py"]
