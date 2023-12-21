describe('Prueba unitari', () => {
  it('nombre aleatorio', () => {
    const app = express();
    const port = 3000;
    const babyNames = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Oliver', 'Isabella', 'Elijah', 'Sophia', 'William'];

    const res = app.get('/baby-name').send();

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body.name).toBeInArray(babyNames);
  });
});
