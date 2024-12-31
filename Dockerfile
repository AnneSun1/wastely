FROM python:3.10.12

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN apt-get update && apt-get install -y \
    build-essential \
    python3-dev \
    libhdf5-dev \
    libatlas-base-dev \
    liblapack-dev

RUN pip install python-multipart
RUN python -m pip install --upgrade pip setuptools wheel

RUN pip install --no-cache-dir -r /code/requirements.txt
RUN pip install tensorflow==2.17
RUN pip install --upgrade typing_extensions


COPY ./model /code/app

EXPOSE 8080

CMD ["uvicorn", "app.server:app", "--host", "0.0.0.0", "--port", "8080"]