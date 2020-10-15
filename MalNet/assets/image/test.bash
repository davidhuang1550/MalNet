#!/bin/bash
i=0
for entry in `ls` 
do
if [[ -d $entry ]]; then
	((i=i+1))
	printf "{id: '$i', text: '$entry',children: ["
   #   echo "$entry on your filesystem."
	for secondEntry in `ls $entry`
	do
		((i=i+1))
		d=0
		printf "{id: '$i', text: '$secondEntry',children: ["

		for thirdEntry in `ls $entry/$secondEntry/`
		do
			((i=i+1))
			((d=d+1))
			if [ $d -eq 15 ]; then
				break
			fi
			printf "{id: '$i', text: '$thirdEntry'},"

		done
		printf "]},"

	done
	printf "]},"
fi
done
