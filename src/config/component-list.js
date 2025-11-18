export const componentList = [
  {
    component: 'text',
    name: '文本',
    icon: 'el-icon-edit',
    props: {
      text: '这是一个文本',
      fontSize: 14,
      color: '#000000',
      w: 120,
      h: 24,
    },
  },
  {
    component: 'image',
    name: '图片',
    icon: 'el-icon-picture',
    props: {
      src: 'https://via.placeholder.com/150',
      w: 150,
      h: 150,
    },
  },
  {
    component: 'button',
    name: '按钮',
    icon: 'el-icon-thumb',
    props: {
      text: '按钮',
      type: 'primary',
      size: 'default',
      w: 100,
      h: 40,
    },
  },
];
