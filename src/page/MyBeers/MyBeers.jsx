import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  Items,
  List,
  Image,
  BeerLink,
  ButtonDelite,
} from './MyBeers.styled';

import useBearStore from 'components/State/State';

export const MyBeers = () => {
  const { shopping, removeBeerFromShopping, beerStatus, changeStatusBeer } =
    useBearStore();

  const location = useLocation();

  const handleChangeStatusBeer = e => {
    const idBeer = e.target.id.toString();
    if (!beerStatus.includes(Number(idBeer))) {
      const Index = beerStatus.findIndex(id => id === idBeer);
      beerStatus.splice(Number(Index), 1);
      window.localStorage.removeItem('status');
      window.localStorage.setItem('status', JSON.stringify(beerStatus));
      changeStatusBeer(beerStatus);
    }
  };

  const deleteBeer = e => {
    const idBeer = e.target.id;

    const newArrayBeers = shopping.filter(({ id }) => id !== Number(idBeer));
    const Index = beerStatus.findIndex(id => id === idBeer);

    beerStatus.splice(Number(Index), 1);
    window.localStorage.removeItem('status');
    window.localStorage.setItem('status', JSON.stringify(beerStatus));
    changeStatusBeer(beerStatus);
    window.localStorage.removeItem('shooping');
    window.localStorage.setItem('shooping', JSON.stringify(newArrayBeers));
    removeBeerFromShopping(newArrayBeers);
  };

  const sort = shopping.sort(({ id: a }, { id: b }) => a - b);

  return (
    <Container>
      {shopping.length === 0 ? (
        <h2>The list is empty... Please add a product</h2>
      ) : (
        <List>
          {sort.map(({ id, name, image_url }) => (
            <Items key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <Image src={image_url} alt={name} />
              </Link>
              <BeerLink to={`${id}`} state={{ from: location }}>
                Details info fo this beer
              </BeerLink>
              <ButtonDelite
                id={id}
                onContextMenu={e => {
                  e.preventDefault();
                  deleteBeer(e);
                  handleChangeStatusBeer(e);
                }}
              >
                Delete
              </ButtonDelite>
            </Items>
          ))}
        </List>
      )}
    </Container>
  );
};

export default MyBeers;
