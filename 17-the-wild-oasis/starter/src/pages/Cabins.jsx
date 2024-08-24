import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function() {
    getCabins().then(data => console.log(data));
  }, [])

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://rwsfkaqkhtmcqxujtkwf.supabase.co/storage/v1/object/sign/cabins-image/cabin-001.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbnMtaW1hZ2UvY2FiaW4tMDAxLmpwZyIsImlhdCI6MTcyNDQxOTE2OSwiZXhwIjoxNzU1OTU1MTY5fQ.H3_T6DDHtjo-xV32c7ihOSeQFsXDmGyV52seawf_ZwY&t=2024-08-23T13%3A19%3A30.642Z" />
    </Row>
  );
}

export default Cabins;
