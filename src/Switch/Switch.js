import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import SwitchBase from '../internal/SwitchBase';

export const styles = theme => ({
  root: {
    display: 'inline-flex',
    width: 62,
    position: 'relative',
    flexShrink: 0,
    // For correct alignment with the text.
    verticalAlign: 'middle',
  },
  bar: {
    borderRadius: 7,
    display: 'block',
    position: 'absolute',
    width: 34,
    height: 14,
    top: '50%',
    marginTop: -7,
    left: '50%',
    marginLeft: -17,
    transition: theme.transitions.create(['opacity', 'background-color'], {
      duration: theme.transitions.duration.shortest,
    }),
    backgroundColor: theme.palette.text.secondary,
    opacity: theme.palette.type === 'light' ? 0.38 : 0.3,
  },
  icon: {
    boxShadow: theme.shadows[1],
    backgroundColor: 'currentColor',
    width: 20,
    height: 20,
    borderRadius: '50%',
  },
  iconChecked: {
    boxShadow: theme.shadows[2],
  },
  // For SwitchBase
  default: {
    zIndex: 1,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  checked: {
    transform: 'translateX(14px)',
    '& + $bar': {
      opacity: 0.5,
    },
  },
  colorPrimary: {
    '& + $bar': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  colorSecondary: {
    '& + $bar': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  disabled: {
    '& + $bar': {
      backgroundColor: theme.palette.action.disabled,
      opacity: theme.palette.type === 'light' ? 0.12 : 0.1,
    },
    '& $icon': {
      boxShadow: theme.shadows[1],
    },
  },
});

function Switch(props) {
  const { classes, className, ...other } = props;
  const icon = <span className={classes.icon} />;
  const checkedIcon = <span className={classNames(classes.icon, classes.iconChecked)} />;

  return (
    <span className={classNames(classes.root, rootClassName)}>
      <SwitchBase
        icon={icon}
        classes={{
          default: classes.default,
          colorPrimary: classes.colorPrimary,
          colorSecondary: classes.colorSecondary,
          checked: classes.checked,
          disabled: classes.disabled,
        }}
        checkedIcon={checkedIcon}
        {...other}
      />
      <span className={classes.bar} />
    </span>
  );
}

Switch.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * @ignore
   */
  defaultChecked: PropTypes.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,
  /**
   * The input component property `type`.
   */
  type: PropTypes.string,
  /**
   * The value of the component.
   */
  value: PropTypes.string,
};

Switch.defaultProps = {
  color: 'secondary',
};

export default withStyles(styles, { name: 'MuiSwitch' })(Switch);
