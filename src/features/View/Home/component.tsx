import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CountryCard from '../CountryCard/component';
import { Link } from 'react-router-dom';
import { useGetAllCountryQuery } from '../../api/apiSlice';
import Header from '../../../components/Header/component';

const Home = () => {
  const {
    data: countries,
    isLoading,
    isError,
    error,
  } = useGetAllCountryQuery();

  // console.log('data', countries);

  if (isLoading) return <p>Loading..</p>;
  else if (isError) {
    console.error(error);
    return <p>Error: Please see console</p>;
  } else
    return (
      <>
        <Header />
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 lg:grid-cols-4 my-4">
          {countries?.map((country, index) => (
            <CountryCard country={country} key={index} />
          ))}
        </div>
      </>
    );
};

export default Home;
