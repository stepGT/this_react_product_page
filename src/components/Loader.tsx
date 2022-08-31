import { Dna } from 'react-loader-spinner';

const Loader = () => {
  return (
    <p className="flex justify-center items-center h-screen">
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </p>
  );
};

export default Loader;
