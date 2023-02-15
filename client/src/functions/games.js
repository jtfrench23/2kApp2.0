function Averages(data){
    console.log(data);
    let i = 0;
    var totalPoints = 0;
    var totalAssists=0;
    var totalSteals=0;
    var totalRebounds=0;
    var totalTurnovers=0;
    var totalBlocks=0;
    var totalFouls=0;
    var totalPointsLoss = 0;
    var totalAssistsLoss=0;
    var totalStealsLoss=0;
    var totalReboundsLoss=0;
    var totalTurnoversLoss=0;
    var totalBlocksLoss=0;
    var totalFoulsLoss=0;
    let winCount= 0;
    let lossCount=0;
    while (i<data.length){
        console.log(data[i]);
        if(data[i].isWin===true){
            totalPoints+=data[i].points;
            totalAssists+=data[i].assists;
            totalSteals+=data[i].steals;
            totalBlocks+=data[i].blocks
            totalRebounds+=data[i].rebounds;
            totalTurnovers+=data[i].turnovers;
            totalFouls+=data[i].fouls;
            winCount+=1;
        }else{
            console.log(data[i]);
            totalPointsLoss+=data[i].points;
            totalAssistsLoss+=data[i].assists;
            totalStealsLoss+=data[i].steals;
            totalBlocksLoss+=data[i].blocks
            totalReboundsLoss+=data[i].rebounds;
            totalTurnoversLoss+=data[i].turnovers;
            totalFoulsLoss+=data[i].fouls;
            lossCount+=1;
        };
        i++;
        console.log(totalPoints);
    };
    let value = {'pointsWin': (totalPoints/winCount).toFixed(2), 'assistsWin': (totalAssists/winCount).toFixed(2), 'stealsWin':(totalSteals/winCount).toFixed(2), 'blocksWin':(totalBlocks/winCount).toFixed(2), 'reboundsWin': (totalRebounds/winCount).toFixed(2), 'turnoversWin':(totalTurnovers/winCount).toFixed(2), 'foulsWin':(totalFouls/winCount).toFixed(2), 'pointsLoss': (totalPointsLoss/lossCount).toFixed(2), 'assistsLoss': (totalAssistsLoss/lossCount).toFixed(2), 'stealsLoss':(totalStealsLoss/lossCount).toFixed(2), 'blocksLoss':(totalBlocksLoss/lossCount).toFixed(2), 'reboundsLoss': (totalReboundsLoss/lossCount).toFixed(2), 'turnoversLoss':(totalTurnoversLoss/lossCount).toFixed(2), 'foulsLoss':(totalFoulsLoss/lossCount).toFixed(2)};
    return(value);
};
export default Averages;