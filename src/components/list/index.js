import React from 'react';

import { useStore } from 'store';
import { udpateTodo } from 'actions';

import Table from '@material-ui/core/Table';
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
} from '@material-ui/core';

const List = () => {
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
        {todos
          .filter(t => RegExp(filter, 'i').test(t.name))
          .map(todo => (
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

export default List;
