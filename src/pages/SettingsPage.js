import React, {useEffect} from 'react';
import ChangePasswordComponent from '../component/ChangePasswordComponent';
import ChangeDoctorStatusComponent from '../component/ChangeDoctorStatusComponent'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import ChangeDoctorRoomComponent from '../component/ChangeDoctorRoomComponent';
import { emit, RELOAD } from '../redux/webSocets/actions';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import { getAllDoctors } from "../redux/settings/actions";


const Settings = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);
  
  // dispatch(getAllDoctors())
const reloadButton = (e) => {
  emit(RELOAD)
  window.location.reload()
}

    return (
      <>
      <Container>
       
            <h2 className='m-5'>Settings</h2>
            <hr className='under-line-two'/>

        <Row>
          <Col md={12} lg={5}>
            <Card body className='card_password'>
            <ChangePasswordComponent />
            </Card>
          </Col>

          <Col md={12} lg={6}>
            <Card body className='card_room'>
            <ChangeDoctorRoomComponent />
            </Card>
          </Col>
        </Row>
            <Card body className='card_status'>
            <ChangeDoctorStatusComponent />
            <Button className='buttonDanger' onClick={(e) => reloadButton()}>Reload</Button>
            </Card>
        
        </Container>
        </>
    );
};

export default Settings;