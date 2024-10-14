import Ficha from './components/Ficha'
import FormRegistro from './components/FormRegistro'
import './App.css'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'


function App() {
  const animals = [{
    id: 0,
    animal: 'capibara',
    atribute: 'sensible',
    imageUrl: '../public/capibara.png',
    imageSize: 150,
    description: 'Capibara rara',
  },
  {
    id: 1,
    animal: 'Perro',
    atribute: 'bello',
    imageUrl: '../public/perro.png',
    imageSize: 150,
    description: 'Perro callejero',
  },
  {
    id: 2,
    animal: 'Gato',
    atribute: 'lindo',
    imageUrl: '../public/gato.png',
    imageSize: 150,
    description: 'Gato casero',
  },
  {
    id: 3,
    animal: 'Oveja',
    atribute: 'bello',
    imageUrl: '../public/oveja.png',
    imageSize: 150,
    description: 'Oveja de granja',
  }]


  return (
    <>
      <List>
        {animals.map((animal) => (
          <ListItem key={animal.id} sx={{ justifyContent: 'center' }}>
            <Ficha
              animal={animal.animal}
              atribute={animal.atribute}
              imageUrl={animal.imageUrl}
              imageSize={animal.imageSize}
              description={animal.description}
            />
          </ListItem>))}
      </List>
      {/*<FormRegistro />*/}
    </>
  );
}

export default App
