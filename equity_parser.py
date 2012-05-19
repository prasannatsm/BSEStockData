#!/usr/bin/env python

import sys
equi_file = open(sys.argv[1], 'r')
equity = equi_file.read()
sections = equity.split("SECTION#")

info = sections[0].split("#$#")
comp_info = info[1].split("#@#")

compname = comp_info[1]
print "Name: " + compname

comp_scripcode = comp_info[2]
print "Scip Code: " + comp_scripcode

compgroup = comp_info[3]
print "Group: " + compgroup

comp_facevalue = comp_info[4]
print "Face Value: " + comp_facevalue

comp_scripid = comp_info[5]
print "Scrip ID: " + comp_scripid

compindex = comp_info[6]
print "Index: " + compindex

compindustry = comp_info[7]
print "Industry: " + compindustry

# TODO: Have skipped comp_info[8] which was just N# (did not make sense) for TAKE solutions's Stock. Need to investigate
