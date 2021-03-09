import { EndPoints } from '../enums/CommonEnums';
import { replaceString } from '../helpers';
import { Action, Mutation } from './types';

export default {
  /**
   * @name fetchClubPlayers
   * @param {function} commit
   * @param {number} clubId
   * @param {number} count
   */
  async [Action.FETCH_CLUB_PLAYERS] ({ commit }, { clubId, count }) {
    const { data: { players } } = await window.axios.get(
      replaceString(EndPoints.DATA_FETCH_URL, { clubId, count }),
    );

    commit(Mutation.SET_CLUB_PLAYERS, players);
  },
};
