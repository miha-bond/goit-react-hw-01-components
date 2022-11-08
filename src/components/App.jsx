import Profile from './Profile/Profile';
import user from './path/to/user.json';

import Statistics from './Statistics/Statistics';
import data from './path/to/data.json';
export const App = () => {
  return (
    <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />

    // <Statistics title='Upload stats' stats={data}/>
    // <Statistics stats={data}/>
  );
};
