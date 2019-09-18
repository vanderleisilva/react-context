import React from 'react';
import useTodo from 'hooks/useTodo';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default () => {
  const { todos } = useTodo();

  return (
    <Table>
      <TableHead>
          <TableRow>
            <TableCell children='Description' />
            <TableCell children='Done' />
          </TableRow>
        </TableHead>
      <TableBody>
        {todos.map(todo => (
          <TableRow key={todo.id}>
            <TableCell children={todo.name} />
            <TableCell children={todo.done ? 'yes' : 'no'} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
