import React from "react";

const PayList = () => {
  const location = useLocation();
  console.log(location.search);

  const query = new URLSearchParams(location.search);
  const transactionID = query.get("transactionId");
  console.log(transactionID);
  const [donate, setDonate] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/donate/by-transaction-id/${transactionID}`)
      .then((res) => res.json())
      .then((data) => setDonate(data));
  }, [transactionID]);
  console.log(donate);

  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>List</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Currency</Th>
              <Th isNumeric>Donate Id</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>inches</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>{donate?.transactionId}</Td>
              <Td isNumeric>{donate?.amount}</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <button onClick={() => window.print()}> Print</button>
    </div>
  );
};

export default PayList;
