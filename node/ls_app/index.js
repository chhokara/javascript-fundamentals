#!/usr/bin/env node
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const path = require("path");

const tagetDir = process.argv[2] || process.cwd();

// readdir function reads the contents of a directory
fs.readdir(tagetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }
  // lstat function provides information about a file or directory
  // BAD CODE HERE
  // This code is bad because the callback for each file are not invoked at the same time
  // This yields a randomly ordered sequence each time the nls command is run
  // for (let filename of filenames) {
  //   fs.lstat(filename, (err, stats) => {
  //     if (err) {
  //       console.log(err);
  //     }

  //     console.log(filename, stats.isFile());
  //   });
  // }
  // BAD CODE COMPLETE

  // Option #1: Callback based approach
  // const allStats = Array(filenames.length).fill(null);

  // for (let filename of filenames) {
  //   const index = filenames.indexOf(filename);

  //   fs.lstat(filename, (err, stats) => {
  //     if (err) {
  //       console.log(err);
  //     }

  //     allStats[index] = stats;

  //     const ready = allStats.every((stat) => {
  //       return stat;
  //     });

  //     if (ready) {
  //       allStats.forEach((stat, index) => {
  //         console.log(filenames[index], stat.isFile());
  //       });
  //     }
  //   });
  // }

  // Option #2: Promise based approach

  // Method #1
  // const lstat = (filename) => {
  //   return new Promise((resolve, reject) => {
  //     fs.lstat(filename, (err, stats) => {
  //       if (err) {
  //         reject(err);
  //       }

  //       resolve(stats);
  //     });
  //   });
  // };

  // Method #2
  // const lstat = util.promisify(fs.lstat);

  // Method #3
  // const { lstat } = fs.promises;

  // for (let filename of filenames) {
  //   try {
  //     const stats = await lstat(filename);

  //     console.log(filename, stats.isFile());
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // Option #3: Promise.all based approach

  const { lstat } = fs.promises;

  const statPromises = filenames.map((filename) => {
    return lstat(path.join(tagetDir, filename));
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(chalk.white(filenames[index]));
    } else {
      console.log(chalk.yellow(filenames[index]));
    }
  }
});
