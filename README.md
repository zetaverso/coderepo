# coderepotest

Pruebas unitarias:
- Desarrollo de constantes para preparacion:
   const app = express();
    const port = 3000;
    const babyNames = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Oliver', 'Isabella', 'Elijah', 'Sophia', 'William'];

Asi mismo desarrollo de ejecucion con :  
    const res = app.get('/baby-name').send();

y de esa forma desarrollo tres posibilidades de test locales: en este caso con un caso de exito 200 para el status, el que tenga determinada propiedad "name" en el body, y que este en el array de babynames, de todo darse exitosamente, funcionaria a la perfección dicha aletoriedad en la app de node.js


    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body.name).toBeInArray(babyNames);



DOCUMENTACION DOCKERFILE

1) Primero importo Nodejs de dockerhub:
   FROM node:latest

2) Luego desarrollo workdir para determinar la ubicacion de mi archivo local del index.js:
con WORKDIR /HOLA/index.js
3) Y luego establezco la ejecucion del codigo con CMD de dicha app localizada en mi maquina local
4)  CMD [ "index.js" ]
   
