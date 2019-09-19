import { fade } from '@material-ui/core/styles';

export default ({ spacing, shape, palette, transitions }) => ({
  search: {
    position: 'relative',
    borderRadius: shape.borderRadius,
    backgroundColor: fade(palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(palette.common.white, 0.25),
    },
    marginLeft: 0,
  },
  searchIcon: {
    width: spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: spacing(1, 1, 1, 7),
    transition: transitions.create('width'),
  },
});
