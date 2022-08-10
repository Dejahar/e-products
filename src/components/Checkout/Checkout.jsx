import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    let navigate = useNavigate();

    const goBack = () => {
        navigate("../", { replace: true });
    }

    return (
        <>
            <div>
                <div><p>NICE CART HERE</p></div>
                <div><p>NICE PAYMENT MENU FORM HERE</p></div>
            </div>
            <Button variant="Light" onClick={goBack}>Back</Button>
        </>
    )
};

export default Checkout;