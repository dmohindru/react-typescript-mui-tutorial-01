import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

export const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
            <Table aria-label='simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                       <TableCell>Id</TableCell> 
                       <TableCell>First name</TableCell> 
                       <TableCell>Last name</TableCell> 
                       <TableCell align='center'>Email</TableCell> 
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map(row => (
                            <TableRow 
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.first_name}</TableCell>
                                    <TableCell>{row.last_name}</TableCell>
                                    <TableCell align='center'>{row.email}</TableCell>
                                </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>

    );
}

const tableData = [{
    "id": 1,
    "first_name": "Abbey",
    "last_name": "Spary",
    "email": "aspary0@dailymail.co.uk",
    "gender": "Male",
    "ip_address": "157.248.26.83"
  }, {
    "id": 2,
    "first_name": "Normie",
    "last_name": "Galler",
    "email": "ngaller1@seesaa.net",
    "gender": "Male",
    "ip_address": "83.42.184.18"
  }, {
    "id": 3,
    "first_name": "Karlens",
    "last_name": "Hasloch",
    "email": "khasloch2@java.com",
    "gender": "Male",
    "ip_address": "170.44.9.218"
  }, {
    "id": 4,
    "first_name": "Cheryl",
    "last_name": "Jodkowski",
    "email": "cjodkowski3@pagesperso-orange.fr",
    "gender": "Female",
    "ip_address": "189.172.74.86"
  }, {
    "id": 5,
    "first_name": "Cynthie",
    "last_name": "Achurch",
    "email": "cachurch4@reddit.com",
    "gender": "Female",
    "ip_address": "69.131.101.55"
  }, {
    "id": 6,
    "first_name": "Veda",
    "last_name": "Toon",
    "email": "vtoon5@gmpg.org",
    "gender": "Female",
    "ip_address": "74.106.39.68"
  }, {
    "id": 7,
    "first_name": "Vin",
    "last_name": "Deely",
    "email": "vdeely6@soundcloud.com",
    "gender": "Male",
    "ip_address": "32.238.186.174"
  }, {
    "id": 8,
    "first_name": "Daniel",
    "last_name": "Maundrell",
    "email": "dmaundrell7@craigslist.org",
    "gender": "Male",
    "ip_address": "209.221.204.23"
  }, {
    "id": 9,
    "first_name": "Nickolai",
    "last_name": "Falkinder",
    "email": "nfalkinder8@about.me",
    "gender": "Male",
    "ip_address": "172.255.183.128"
  }, {
    "id": 10,
    "first_name": "Nina",
    "last_name": "Fibbens",
    "email": "nfibbens9@is.gd",
    "gender": "Non-binary",
    "ip_address": "111.185.250.89"
  }];