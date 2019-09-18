import React from 'react';
import useTodo from 'hooks/useTodo';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

export default () => {
  const { todos, update } = useTodo();

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
            <TableCell>
              <Checkbox
                checked={todo.done}
                onChange={() => update({...todo, done: !todo.done})}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
