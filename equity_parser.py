#!/usr/bin/env python

import sys
equi_file = open(sys.argv[1], 'r')
equity = equi_file.read()
sections = equity.split("#SECTION#")

info = sections[0].split("#$#")
comp_info = info[1].split("#@#")

# TODO: Have skipped comp_info[0] which has TAKE SOLU for TAKE solutions's stock. Need to investigate. 
#comp_unknown1 = comp_info[0]
#print "Comp Unknown1: " + comp_unknown1
comp_prettyname = comp_info[0]
print "Pretty Name: " + comp_prettyname # Just a guess.

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

# TODO: Have skipped comp_info[8] which was just N (did not make sense) for TAKE solutions's Stock. Need to investigate.
comp_unknown2 = comp_info[8]
print "Comp unknown2: " + comp_unknown2

stock_info = sections[1].split("#@#")

stock_unknown1 = stock_info[0]
print "Stock Unknown1: " + stock_unknown1

stock_unknown2 = stock_info[1]
print "Stock Unknown2: " + stock_unknown2

stock_price = stock_info[2]
print "Price: " + stock_price

stock_unknown3 = stock_info[3]
print "Stock Unknown3: " + stock_unknown3

stock_unknown4 = stock_info[4]
print "Stock Unknown4: " + stock_unknown4

stock_unknown5 = stock_info[5]
print "Stock Unknown5: " + stock_unknown5

stock_price1 = stock_info[6]
print "Price1: " + stock_price1

stock_change = stock_info[7]
print "Change: Rs" + stock_change

stock_changepercent = stock_info[8]
print "Percentage Change: " + stock_changepercent + "%"

stock_numdecimals = stock_info[9] # Just a guess.
print "Number of Decimals: " + stock_numdecimals

stock_unknown6 = stock_info[10]
print "Stock Unknown6: " + stock_unknown6

stock_unknown7 = stock_info[11]
print "Stock Unknown7: " + stock_unknown7

pricemove = sections[2].split("#@#")

price_dayhilo = pricemove[0]
print "Day's High / Low: " + price_dayhilo

price_prevcloseopen = pricemove[1]
print "Previous Close / Open: " + price_prevcloseopen

price_weightavg = pricemove[2]
print "Weighted Average price: " + price_weightavg

price_tottrdvalunit = pricemove[3]
price_tottrdval = pricemove[4]
print "Total Traded Value " + price_tottrdvalunit + ": " + price_tottrdval

price_unknown1 = pricemove[5]
print "Price Unknown1: " + price_unknown1

price_ttq2wavgq = pricemove[6]
print "TTQ / 2W Avg Q: " + price_ttq2wavgq

price_circuitlim = pricemove[7]
print "Circuit Limits: " + price_circuitlim

price_mktcapfrefloat = pricemove[8]
print "Market Capital Full / Free Float (Cr.): " + price_mktcapfrefloat

market_depth = sections[3].split("#@#") # As of now nothing todo with this.

stock_hist = sections[4].split("#@#")
hist_weekhi = stock_hist[0]
print "Weekly High: " + hist_weekhi

hist_weeklo = stock_hist[1]
print "Weekly Low: " + hist_weeklo

hist_monhi = stock_hist[2]
print "Monthly High: " + hist_monhi

hist_monlo = stock_hist[3]
print "Monthly Low: " + hist_monlo

hist_52whi = stock_hist[4]
hist_52whidate = stock_hist[6]
print "52 Weeks High: " + hist_52whi + " (" + hist_52whidate + ") "

hist_52wlo = stock_hist[5]
hist_52wlodate = stock_hist[7]
print "52 Weeks Low: " + hist_52wlo + " (" + hist_52wlodate + ") "

hist_var_elmper = stock_hist[8]
print "Var + ELM%: " + hist_var_elmper

hist_delivery = stock_hist[9]
print "Delivery: " + hist_delivery

hist_exdate = stock_hist[10]
print "Ex Date: " + hist_exdate

hist_unknown1 = stock_hist[11]
print "Stock History Unknown: " + hist_unknown1

hist_traddate = stock_hist[12]
print "Trading Date: " + hist_traddate


