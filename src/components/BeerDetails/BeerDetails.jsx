import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getApi } from 'Api/Api';
import {
  Container,
  ContainerDetails,
  ContainerImage,
  ContainerInfo,
  Image,
  LinkGoBack,
  Span,
  Text,
  Title,
} from './BeerDetailStyld';
import useBearStore from 'components/State/State';

export const BeerDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const { beerId, addBeerId } = useBearStore();

  useEffect(() => {
    getApi(`getBeerbyId`, id).then(([...item]) => {
      addBeerId(item);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <LinkGoBack to={location.state?.from ?? `/`}>Go back</LinkGoBack>
      {beerId.map(({ id, name, image_url, description }) => (
        <ContainerInfo key={id}>
          <ContainerImage>
            <Image src={image_url} alt={name} />
          </ContainerImage>

          <ContainerDetails>
            <Title>Beer name: {name}</Title>

            <Text>
              <Span>Detail info: </Span>
              {description}
            </Text>
          </ContainerDetails>
        </ContainerInfo>
      ))}
    </Container>
  );
};

export default BeerDetails;
