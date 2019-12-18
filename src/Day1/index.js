const input =
  "125517\n140694\n65516\n98562\n75660\n133603\n114499\n81732\n119081\n50911\n96650\n98330\n145164\n64851\n67455\n108208\n102674\n147581\n112059\n62456\n132006\n88738\n72139\n121074\n103936\n65149\n82081\n90168\n134670\n79142\n83296\n109983\n60250\n61982\n136326\n52980\n79969\n66851\n77049\n59720\n73494\n115708\n109326\n136399\n72950\n82041\n105467\n112321\n125019\n79213\n107186\n148340\n112833\n125646\n112509\n52396\n59446\n93967\n73179\n88725\n98256\n143303\n57503\n120314\n147921\n130856\n95561\n145857\n54976\n100605\n77961\n143120\n84127\n130389\n131848\n109542\n119653\n61660\n124800\n61498\n149675\n143906\n120361\n68328\n104473\n54279\n119945\n122511\n109410\n135350\n112070\n88822\n149086\n64594\n118788\n102569\n61721\n89170\n83581\n58722";

const calculateFuel = mass => Math.floor(mass / 3) - 2;

const calcucateFuelForFuel = (mass, totalFuel = 0) => {
  const fuelNeed = calculateFuel(mass);

  if (fuelNeed > 0) {
    return calcucateFuelForFuel(fuelNeed, fuelNeed + totalFuel);
  }

  return totalFuel;
};

// Part 1
const moduleFuels = input.split("\n").map(mass => calculateFuel(mass));

const fuelForModules = moduleFuels.reduce((acc, fuel) => acc + fuel, 0);

console.log(`Fuel required for the modules is ${fuelForModules}`);

// Part 2
const moduleFuelFuels = moduleFuels.map(fuelMass =>
  calcucateFuelForFuel(fuelMass)
);

const fuelForFuel = moduleFuelFuels.reduce((acc, fuel) => acc + fuel, 0);

console.log(`Total fuel requirements is ${fuelForFuel + fuelForModules}`);
