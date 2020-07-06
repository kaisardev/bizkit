import React from "react";

import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./MainTable.css";

const MainTable = (props) => {
  return (
    <div className="MainTable">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Наименование компании</TableCell>
              <TableCell>Тип юр.лица</TableCell>
              <TableCell>Регион</TableCell>
              <TableCell>Город</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.companies.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.region}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>
                    <Link
                      to={`/companies/${item.id}/`}
                      className="edit_button"></Link>
                    <button
                      className="delete_button"
                      onClick={() => {
                        props.delete(item.id);
                      }}></button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MainTable;
