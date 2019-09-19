import React from 'react';

import { useStore } from 'store';
import { udpateTodo } from 'actions';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

export default () => {
  const [{ todos, filter }, dispatch] = useStore();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell children='Description' />
          <TableCell children='Done' />
        </TableRow>
      </TableHead>
      <TableBody>
        {todos.filter(t => RegExp(filter, 'i').test(t.name)).map(todo => (
          <TableRow key={todo.id}>
            <TableCell children={todo.name} />
            <TableCell>
              <Checkbox
                checked={todo.done}
                onChange={() =>
                  dispatch(udpateTodo({ ...todo, done: !todo.done }))
                }
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
