import React from 'react';

import { useStore } from 'store';
import { udpateTodo, removeTodo } from 'actions';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default () => {
  const [{ todos, filter }, dispatch] = useStore();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell children='Description' />
          <TableCell children='Done' />
          <TableCell children='Remove' style={{ width: 64 }} />
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
              <TableCell>
                <IconButton
                  children={<DeleteIcon />}
                  onClick={() => dispatch(removeTodo(todo))}
                />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
