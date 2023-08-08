
const BoilingVerdict = ({ celsius }) => {

    if (celsius >= 100) {
        return <p>Water would be boil</p>
    }

    else {
        return <p>Water would not be boil</p>
    }



};

export default BoilingVerdict;