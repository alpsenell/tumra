import { Mutation } from './types';

export default {
  /**
   * @name setClubPlayers
   * @param {object} state
   * @param {object} players
   */
  [Mutation.SET_CLUB_PLAYERS] (state, players) {
    state.allPlayers = players;
  },

  /**
   * @name addPlayerToLineup
   * @param {object} state
   * @param {object} player
   */
  [Mutation.ADD_PLAYER_TO_LINEUP] (state, player) {
    const playerIndex = state.allPlayers.findIndex(
      (selectedPlayer) => selectedPlayer.id === player.id,
    );

    state.selectedPlayers.push(player);
    state.allPlayers.splice(playerIndex, 1);
  },

  /**
   * @name removePlayerFromLineup
   * @param {object} state
   * @param {object} player
   */
  [Mutation.REMOVE_PLAYER_FROM_LINEUP] (state, player) {
    const playerIndex = state.selectedPlayers.findIndex(
      (selectedPlayer) => selectedPlayer.id === player.id,
    );

    state.selectedPlayers.splice(playerIndex, 1);
    state.allPlayers.unshift(player);
  },

  /**
   * @name addSubstitute
   * @param {object} state
   * @param {string} config
   */
  [Mutation.ADD_SUBSTITUTE] (state, { inPlayer, outPlayer, substituteMinute }) {
    state.substitutes.unshift({ inPlayer, outPlayer, substituteMinute });
  },
};
