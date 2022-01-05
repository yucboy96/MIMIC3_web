import { UsergroupAddOutlined, BankOutlined } from '@ant-design/icons';

const menuConfig = [
  {
    name: '趋势预测',
    icon: UsergroupAddOutlined,
    children: [
      // {
      //   name: '我的群组',
      //   link: '/my-group',
      // },
      // {
      //   name: '搜索群组',
      //   link: '/search-group',
      // },
      {
        name: '我的群组',
        link: '/group',
      },
    ],
  },
];

export default menuConfig;
