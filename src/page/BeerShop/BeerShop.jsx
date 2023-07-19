import { useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  List,
  Items,
  BeerLink,
  Image,
  ButtonBuy,
  ButtonDelite,
} from './BeerShop.styled';

import { getApi } from 'Api/Api';
import useBearStore from 'components/State/State';

const BeerShop = () => {
  const location = useLocation();
  const {
    changeStatusBeer,
    beerStatus,
    index,
    changeIndex,
    limit,
    changeLimit,
    beers,
    addBeers,
    shopping,
    page,
    fetching,
    addToShopping,
    togglFetching,
    addPage,

    removeBeerFromShopping,
  } = useBearStore();

  const buyBeer = e => {
    const idBeer = e.target.id;

    const findBeer = beers.filter(({ id }) => id === Number(idBeer));

    const findDubl = shopping.find(({ id }) => id === Number(idBeer));

    if (!findDubl) {
      window.localStorage.setItem(
        'shooping',
        JSON.stringify([...shopping, ...findBeer])
      );
      addToShopping(findBeer);
    }
  };
  const deleteBeer = e => {
    const idBeer = e.target.id;
    const newArrayBeers = shopping.filter(({ id }) => id !== Number(idBeer));
    window.localStorage.removeItem('shooping');
    window.localStorage.setItem('shooping', JSON.stringify(newArrayBeers));
    removeBeerFromShopping(newArrayBeers);
  };

  useEffect(() => {
    getApi('beers', 1).then(([...item]) => {
      window.localStorage.setItem('beers', JSON.stringify(item));
      addBeers(item);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (beers.length === limit) {
      return;
    }
    const options = {
      threshold: 0.8,
    };

    const firstItemObserver = new IntersectionObserver(
      callbackForFirstItem,
      options
    );
    const array = [];
    document.querySelectorAll(`#item`).forEach(li => {
      array.push(li);
    });

    const firstItem = array[0];
    if (firstItem) {
      firstItemObserver.observe(firstItem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    if (fetching) {
      return;
    }
    const options = {
      threshold: 0.8,
    };
    const lastItemObserver = new IntersectionObserver(
      callbackForLastItem,
      options
    );
    const array = [];
    document.querySelectorAll(`#item`).forEach(li => {
      array.push(li);
    });

    const lastItem = array[array.length - 1];

    if (lastItem) {
      lastItemObserver.observe(lastItem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beers, index, beerStatus]);

  useEffect(() => {
    if (fetching) {
      getApi('beers', page).then(([...item]) => {
        const newArray = [...beers, ...item];
        window.localStorage.removeItem('beers');
        window.localStorage.setItem('beers', JSON.stringify(newArray));
        addBeers(newArray);
        togglFetching(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  const callbackForFirstItem = function ([entries], observer) {
    if (entries.isIntersecting && index === 0) {
      return;
    }
    if (entries.isIntersecting) {
      observer.unobserve(entries.target);

      changeLimit(false);
      changeIndex(false);
    }
  };

  const callbackForLastItem = function ([entries], observer) {
    if (entries.isIntersecting) {
      if (beers.length === limit) {
        observer.unobserve(entries.target);

        addPage();

        changeLimit(true);
        changeIndex(true);

        togglFetching(true);
        return;
      }

      observer.unobserve(entries.target);

      changeLimit(true);
      changeIndex(true);
      return;
    }
  };

  const handleChangeStatusBeer = e => {
    const idBeer = e.target.id.toString();

    if (!beerStatus.includes(Number(idBeer))) {
      beerStatus.push(Number(idBeer));
      window.localStorage.setItem('status', JSON.stringify(beerStatus));
      changeStatusBeer(beerStatus);
    } else {
      const Index = beerStatus.findIndex(id => id === idBeer);

      beerStatus.splice(Number(Index), 1);
      window.localStorage.removeItem('status');
      window.localStorage.setItem('status', JSON.stringify(beerStatus));
      changeStatusBeer(beerStatus);
    }
  };

  const sort = beers.sort(({ id: a }, { id: b }) => a - b);

  return (
    <Container>
      <List id="scrollArea">
        {sort.slice(index, limit).map(
          ({ id, name, image_url }) => (
            <Items id="item" key={id}>
              <Link to={`beers/${id}`} state={{ from: location }}>
                <Image src={image_url} alt={name} />
              </Link>
              <BeerLink to={`beers/${id}`} state={{ from: location }}>
                Details info fo this beer
              </BeerLink>
              {!beerStatus.find(status => status === Number(id)) ? (
                <ButtonBuy
                  id={id}
                  onContextMenu={e => {
                    e.preventDefault();
                    buyBeer(e);
                    handleChangeStatusBeer(e);
                  }}
                >
                  Buy beer
                </ButtonBuy>
              ) : (
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
              )}
            </Items>
          )
          // )
        )}
      </List>
    </Container>
  );
};

export default BeerShop;
