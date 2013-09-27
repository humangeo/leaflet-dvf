// From:  http://datasets.flowingdata.com/tuts/maparcs/flights.csv
var flights = [
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "SJU",
		"cnt": "120"
	},
	{
		"airline": "AA",
		"airport1": "MSP",
		"airport2": "DFW",
		"cnt": "326"
	},
	{
		"airline": "AA",
		"airport1": "LGA",
		"airport2": "ORD",
		"cnt": "860"
	},
	{
		"airline": "AA",
		"airport1": "TPA",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "STT",
		"airport2": "BOS",
		"cnt": "44"
	},
	{
		"airline": "AA",
		"airport1": "PHX",
		"airport2": "DFW",
		"cnt": "550"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "LAX",
		"cnt": "496"
	},
	{
		"airline": "AA",
		"airport1": "DCA",
		"airport2": "STL",
		"cnt": "200"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "SEA",
		"cnt": "214"
	},
	{
		"airline": "AA",
		"airport1": "XNA",
		"airport2": "DFW",
		"cnt": "50"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "DFW",
		"cnt": "825"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "LAS",
		"cnt": "280"
	},
	{
		"airline": "AA",
		"airport1": "DEN",
		"airport2": "DFW",
		"cnt": "558"
	},
	{
		"airline": "AA",
		"airport1": "HDN",
		"airport2": "ORD",
		"cnt": "48"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "DFW",
		"cnt": "914"
	},
	{
		"airline": "AA",
		"airport1": "BNA",
		"airport2": "LGA",
		"cnt": "102"
	},
	{
		"airline": "AA",
		"airport1": "FAT",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "AUS",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "PHL",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "SFO",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "LAS",
		"cnt": "569"
	},
	{
		"airline": "AA",
		"airport1": "RNO",
		"airport2": "DFW",
		"cnt": "150"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "ELP",
		"cnt": "434"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "SFO",
		"cnt": "336"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "SFO",
		"cnt": "326"
	},
	{
		"airline": "AA",
		"airport1": "MCO",
		"airport2": "DFW",
		"cnt": "500"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "EGE",
		"cnt": "64"
	},
	{
		"airline": "AA",
		"airport1": "MCO",
		"airport2": "ORD",
		"cnt": "224"
	},
	{
		"airline": "AA",
		"airport1": "IAH",
		"airport2": "DFW",
		"cnt": "324"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "BOS",
		"cnt": "422"
	},
	{
		"airline": "AA",
		"airport1": "MTJ",
		"airport2": "DFW",
		"cnt": "16"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "SNA",
		"cnt": "152"
	},
	{
		"airline": "AA",
		"airport1": "OKC",
		"airport2": "DFW",
		"cnt": "390"
	},
	{
		"airline": "AA",
		"airport1": "HSV",
		"airport2": "DFW",
		"cnt": "158"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "RDU",
		"cnt": "278"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "BHM",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "PHX",
		"airport2": "MIA",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "MSY",
		"cnt": "149"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "PDX",
		"cnt": "224"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "MSP",
		"cnt": "160"
	},
	{
		"airline": "AA",
		"airport1": "FLL",
		"airport2": "ORD",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "IAD",
		"cnt": "308"
	},
	{
		"airline": "AA",
		"airport1": "CMH",
		"airport2": "DFW",
		"cnt": "104"
	},
	{
		"airline": "AA",
		"airport1": "OGG",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "MCI",
		"airport2": "DFW",
		"cnt": "436"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "SNA",
		"cnt": "578"
	},
	{
		"airline": "AA",
		"airport1": "AUS",
		"airport2": "LAX",
		"cnt": "162"
	},
	{
		"airline": "AA",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "214"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "OGG",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "LGA",
		"cnt": "776"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "DFW",
		"cnt": "560"
	},
	{
		"airline": "AA",
		"airport1": "LGA",
		"airport2": "MIA",
		"cnt": "615"
	},
	{
		"airline": "AA",
		"airport1": "TUL",
		"airport2": "MIA",
		"cnt": "4"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "JFK",
		"cnt": "392"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "BOS",
		"cnt": "430"
	},
	{
		"airline": "AA",
		"airport1": "EGE",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "EGE",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "BDL",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "SLC",
		"airport2": "DFW",
		"cnt": "280"
	},
	{
		"airline": "AA",
		"airport1": "JFK",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "JAC",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "ONT",
		"cnt": "222"
	},
	{
		"airline": "AA",
		"airport1": "ATL",
		"airport2": "MIA",
		"cnt": "224"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "DTW",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "PIT",
		"cnt": "170"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "TPA",
		"cnt": "392"
	},
	{
		"airline": "AA",
		"airport1": "SAT",
		"airport2": "DFW",
		"cnt": "826"
	},
	{
		"airline": "AA",
		"airport1": "EWR",
		"airport2": "DFW",
		"cnt": "310"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "BOS",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "COS",
		"cnt": "278"
	},
	{
		"airline": "AA",
		"airport1": "STL",
		"airport2": "DFW",
		"cnt": "486"
	},
	{
		"airline": "AA",
		"airport1": "EWR",
		"airport2": "ORD",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "EGE",
		"airport2": "MIA",
		"cnt": "48"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "DCA",
		"airport2": "ORD",
		"cnt": "324"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "HDN",
		"cnt": "64"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "IND",
		"cnt": "278"
	},
	{
		"airline": "AA",
		"airport1": "SAN",
		"airport2": "ORD",
		"cnt": "224"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "JAX",
		"cnt": "216"
	},
	{
		"airline": "AA",
		"airport1": "SAN",
		"airport2": "DFW",
		"cnt": "500"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "LAS",
		"cnt": "222"
	},
	{
		"airline": "AA",
		"airport1": "STL",
		"airport2": "ORD",
		"cnt": "483"
	},
	{
		"airline": "AA",
		"airport1": "DTW",
		"airport2": "DFW",
		"cnt": "260"
	},
	{
		"airline": "AA",
		"airport1": "AUS",
		"airport2": "DFW",
		"cnt": "820"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "TPA",
		"cnt": "298"
	},
	{
		"airline": "AA",
		"airport1": "FLL",
		"airport2": "DFW",
		"cnt": "336"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "LIH",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "ICT",
		"cnt": "214"
	},
	{
		"airline": "AA",
		"airport1": "LAS",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "SAT",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "SFO",
		"airport2": "DFW",
		"cnt": "526"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "CLT",
		"cnt": "360"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "BOS",
		"cnt": "392"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "BDL",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "PSP",
		"cnt": "64"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "RSW",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "BNA",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "JFK",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "HNL",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "EWR",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "EGE",
		"airport2": "DFW",
		"cnt": "136"
	},
	{
		"airline": "AA",
		"airport1": "KOA",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "PBI",
		"cnt": "150"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "SEA",
		"cnt": "392"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "IAD",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "SJC",
		"airport2": "DFW",
		"cnt": "318"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "EWR",
		"cnt": "54"
	},
	{
		"airline": "AA",
		"airport1": "RNO",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "SMF",
		"cnt": "224"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "IAH",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "RIC",
		"airport2": "DFW",
		"cnt": "166"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "BWI",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "SJC",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "SDF",
		"airport2": "DFW",
		"cnt": "164"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "BDL",
		"cnt": "162"
	},
	{
		"airline": "AA",
		"airport1": "BNA",
		"airport2": "DFW",
		"cnt": "436"
	},
	{
		"airline": "AA",
		"airport1": "IAD",
		"airport2": "SJU",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "JAC",
		"cnt": "24"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "BNA",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "BWI",
		"airport2": "DFW",
		"cnt": "326"
	},
	{
		"airline": "AA",
		"airport1": "MFE",
		"airport2": "DFW",
		"cnt": "214"
	},
	{
		"airline": "AA",
		"airport1": "STL",
		"airport2": "LGA",
		"cnt": "206"
	},
	{
		"airline": "AA",
		"airport1": "PHL",
		"airport2": "DFW",
		"cnt": "322"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "STT",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "BUR",
		"airport2": "DFW",
		"cnt": "208"
	},
	{
		"airline": "AA",
		"airport1": "TUS",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "DCA",
		"airport2": "MIA",
		"cnt": "504"
	},
	{
		"airline": "AA",
		"airport1": "HNL",
		"airport2": "ORD",
		"cnt": "46"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "STX",
		"cnt": "62"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "AUS",
		"cnt": "166"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "PSP",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "IAD",
		"cnt": "166"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "ABQ",
		"cnt": "444"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "STL",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "RSW",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "HNL",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "JFK",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "MCO",
		"cnt": "448"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "MIA",
		"cnt": "392"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "HNL",
		"cnt": "216"
	},
	{
		"airline": "AA",
		"airport1": "RDU",
		"airport2": "ORD",
		"cnt": "156"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "TUL",
		"cnt": "390"
	},
	{
		"airline": "AA",
		"airport1": "MCO",
		"airport2": "JFK",
		"cnt": "224"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "TUS",
		"cnt": "419"
	},
	{
		"airline": "AA",
		"airport1": "OMA",
		"airport2": "DFW",
		"cnt": "272"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "JFK",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "LGA",
		"airport2": "EGE",
		"cnt": "8"
	},
	{
		"airline": "AA",
		"airport1": "JFK",
		"airport2": "LAX",
		"cnt": "548"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "TPA",
		"cnt": "150"
	},
	{
		"airline": "AA",
		"airport1": "STT",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "MEM",
		"airport2": "DFW",
		"cnt": "214"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "MSY",
		"cnt": "336"
	},
	{
		"airline": "AA",
		"airport1": "TUL",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "DAY",
		"cnt": "104"
	},
	{
		"airline": "AA",
		"airport1": "JFK",
		"airport2": "SJU",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "ATL",
		"airport2": "DFW",
		"cnt": "580"
	},
	{
		"airline": "AA",
		"airport1": "LAX",
		"airport2": "SJU",
		"cnt": "16"
	},
	{
		"airline": "AA",
		"airport1": "SEA",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "RDU",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "PHL",
		"cnt": "110"
	},
	{
		"airline": "AA",
		"airport1": "MIA",
		"airport2": "MSY",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "SJU",
		"airport2": "MIA",
		"cnt": "448"
	},
	{
		"airline": "AA",
		"airport1": "SFO",
		"airport2": "JFK",
		"cnt": "278"
	},
	{
		"airline": "AA",
		"airport1": "MSP",
		"airport2": "MIA",
		"cnt": "56"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "PBI",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "STL",
		"airport2": "LAX",
		"cnt": "166"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "PHX",
		"cnt": "280"
	},
	{
		"airline": "AA",
		"airport1": "BOS",
		"airport2": "LAX",
		"cnt": "168"
	},
	{
		"airline": "AA",
		"airport1": "ORD",
		"airport2": "MIA",
		"cnt": "505"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "ORF",
		"cnt": "112"
	},
	{
		"airline": "AA",
		"airport1": "DFW",
		"airport2": "DCA",
		"cnt": "588"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "MKE",
		"cnt": "416"
	},
	{
		"airline": "OO",
		"airport1": "MRY",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "AUS",
		"airport2": "ORD",
		"cnt": "40"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "ABQ",
		"cnt": "139"
	},
	{
		"airline": "OO",
		"airport1": "ASE",
		"airport2": "SFO",
		"cnt": "102"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "STL",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "BOI",
		"airport2": "LAX",
		"cnt": "90"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "JAC",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "CAK",
		"airport2": "ORD",
		"cnt": "4"
	},
	{
		"airline": "OO",
		"airport1": "SAT",
		"airport2": "LAX",
		"cnt": "145"
	},
	{
		"airline": "OO",
		"airport1": "IDA",
		"airport2": "DEN",
		"cnt": "156"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "BUR",
		"cnt": "280"
	},
	{
		"airline": "OO",
		"airport1": "MEM",
		"airport2": "MKE",
		"cnt": "60"
	},
	{
		"airline": "OO",
		"airport1": "CLE",
		"airport2": "ORD",
		"cnt": "29"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MSY",
		"cnt": "24"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "BHM",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "DEN",
		"cnt": "656"
	},
	{
		"airline": "OO",
		"airport1": "BHM",
		"airport2": "ORD",
		"cnt": "32"
	},
	{
		"airline": "OO",
		"airport1": "ACV",
		"airport2": "SFO",
		"cnt": "340"
	},
	{
		"airline": "OO",
		"airport1": "GCC",
		"airport2": "RKS",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "DSM",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "FAR",
		"cnt": "70"
	},
	{
		"airline": "OO",
		"airport1": "STL",
		"airport2": "MEM",
		"cnt": "54"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "PHX",
		"cnt": "36"
	},
	{
		"airline": "OO",
		"airport1": "SEA",
		"airport2": "SFO",
		"cnt": "26"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "GEG",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "CID",
		"cnt": "61"
	},
	{
		"airline": "OO",
		"airport1": "DFW",
		"airport2": "IAD",
		"cnt": "16"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "STL",
		"cnt": "46"
	},
	{
		"airline": "OO",
		"airport1": "DFW",
		"airport2": "IAH",
		"cnt": "102"
	},
	{
		"airline": "OO",
		"airport1": "BFL",
		"airport2": "SFO",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "BOI",
		"airport2": "ORD",
		"cnt": "57"
	},
	{
		"airline": "OO",
		"airport1": "BZN",
		"airport2": "ORD",
		"cnt": "83"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "SAT",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "BZN",
		"cnt": "220"
	},
	{
		"airline": "OO",
		"airport1": "ICT",
		"airport2": "MEM",
		"cnt": "50"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "PIT",
		"cnt": "57"
	},
	{
		"airline": "OO",
		"airport1": "GTF",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "TWF",
		"cnt": "225"
	},
	{
		"airline": "OO",
		"airport1": "AVL",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "ATL",
		"airport2": "IAD",
		"cnt": "3"
	},
	{
		"airline": "OO",
		"airport1": "ATL",
		"airport2": "IAH",
		"cnt": "100"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "IAD",
		"cnt": "84"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "GJT",
		"cnt": "285"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "EUG",
		"cnt": "96"
	},
	{
		"airline": "OO",
		"airport1": "FAT",
		"airport2": "DEN",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "SBP",
		"airport2": "SFO",
		"cnt": "274"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "SAT",
		"cnt": "6"
	},
	{
		"airline": "OO",
		"airport1": "BIS",
		"airport2": "CLE",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "FAR",
		"airport2": "ORD",
		"cnt": "54"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "LEX",
		"cnt": "32"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "MMH",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MSP",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "ASE",
		"airport2": "LAX",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "ASE",
		"airport2": "ORD",
		"cnt": "236"
	},
	{
		"airline": "OO",
		"airport1": "STL",
		"airport2": "SLC",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "ORF",
		"airport2": "IAD",
		"cnt": "30"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "MTJ",
		"airport2": "ORD",
		"cnt": "64"
	},
	{
		"airline": "OO",
		"airport1": "LIT",
		"airport2": "DEN",
		"cnt": "53"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MEM",
		"cnt": "9"
	},
	{
		"airline": "OO",
		"airport1": "OKC",
		"airport2": "ORD",
		"cnt": "78"
	},
	{
		"airline": "OO",
		"airport1": "CLE",
		"airport2": "ATL",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "GRB",
		"airport2": "ORD",
		"cnt": "84"
	},
	{
		"airline": "OO",
		"airport1": "EUG",
		"airport2": "PDX",
		"cnt": "212"
	},
	{
		"airline": "OO",
		"airport1": "CLD",
		"airport2": "LAX",
		"cnt": "324"
	},
	{
		"airline": "OO",
		"airport1": "IAD",
		"airport2": "SYR",
		"cnt": "6"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "GEG",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SMF",
		"cnt": "224"
	},
	{
		"airline": "OO",
		"airport1": "RAP",
		"airport2": "SLC",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "PSP",
		"airport2": "LAX",
		"cnt": "354"
	},
	{
		"airline": "OO",
		"airport1": "CIC",
		"airport2": "SFO",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "IND",
		"cnt": "10"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SMX",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "PAH",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "RKS",
		"airport2": "SLC",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "GJT",
		"airport2": "ASE",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "TYS",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "RDM",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "HSV",
		"airport2": "DEN",
		"cnt": "90"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "MFR",
		"cnt": "300"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "CPR",
		"airport2": "SLC",
		"cnt": "108"
	},
	{
		"airline": "OO",
		"airport1": "COS",
		"airport2": "SLC",
		"cnt": "108"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "IND",
		"cnt": "62"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MAF",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "PDX",
		"cnt": "190"
	},
	{
		"airline": "OO",
		"airport1": "BFL",
		"airport2": "LAX",
		"cnt": "100"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "DSM",
		"cnt": "85"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "DEN",
		"cnt": "26"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "TUS",
		"cnt": "230"
	},
	{
		"airline": "OO",
		"airport1": "OAK",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "IDA",
		"cnt": "264"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "PIT",
		"cnt": "4"
	},
	{
		"airline": "OO",
		"airport1": "MCI",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SNA",
		"cnt": "44"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "COD",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "MAF",
		"cnt": "53"
	},
	{
		"airline": "OO",
		"airport1": "SYR",
		"airport2": "ORD",
		"cnt": "16"
	},
	{
		"airline": "OO",
		"airport1": "SDF",
		"airport2": "MSP",
		"cnt": "76"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "BNA",
		"cnt": "52"
	},
	{
		"airline": "OO",
		"airport1": "OKC",
		"airport2": "IAD",
		"cnt": "12"
	},
	{
		"airline": "OO",
		"airport1": "PSC",
		"airport2": "SLC",
		"cnt": "224"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "HPN",
		"cnt": "172"
	},
	{
		"airline": "OO",
		"airport1": "COS",
		"airport2": "ORD",
		"cnt": "227"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "DAY",
		"cnt": "68"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "CWA",
		"cnt": "156"
	},
	{
		"airline": "OO",
		"airport1": "GRR",
		"airport2": "ORD",
		"cnt": "44"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "RNO",
		"cnt": "163"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SGF",
		"cnt": "18"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "GFK",
		"cnt": "246"
	},
	{
		"airline": "OO",
		"airport1": "AUS",
		"airport2": "SLC",
		"cnt": "96"
	},
	{
		"airline": "OO",
		"airport1": "BOS",
		"airport2": "CLE",
		"cnt": "19"
	},
	{
		"airline": "OO",
		"airport1": "SEA",
		"airport2": "SLC",
		"cnt": "128"
	},
	{
		"airline": "OO",
		"airport1": "TUS",
		"airport2": "SFO",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "FWA",
		"airport2": "ORD",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "CEC",
		"airport2": "ACV",
		"cnt": "48"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "AUS",
		"cnt": "111"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "MSP",
		"cnt": "62"
	},
	{
		"airline": "OO",
		"airport1": "LGB",
		"airport2": "SLC",
		"cnt": "270"
	},
	{
		"airline": "OO",
		"airport1": "SAN",
		"airport2": "DEN",
		"cnt": "7"
	},
	{
		"airline": "OO",
		"airport1": "MKG",
		"airport2": "ORD",
		"cnt": "120"
	},
	{
		"airline": "OO",
		"airport1": "OKC",
		"airport2": "DEN",
		"cnt": "24"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "LAS",
		"cnt": "28"
	},
	{
		"airline": "OO",
		"airport1": "MSN",
		"airport2": "MSP",
		"cnt": "38"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "RSW",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "RST",
		"cnt": "37"
	},
	{
		"airline": "OO",
		"airport1": "BTM",
		"airport2": "SLC",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "IAD",
		"airport2": "COS",
		"cnt": "55"
	},
	{
		"airline": "OO",
		"airport1": "GJT",
		"airport2": "SLC",
		"cnt": "156"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "ASE",
		"cnt": "610"
	},
	{
		"airline": "OO",
		"airport1": "FAT",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "ICT",
		"cnt": "138"
	},
	{
		"airline": "OO",
		"airport1": "DRO",
		"airport2": "DEN",
		"cnt": "363"
	},
	{
		"airline": "OO",
		"airport1": "CMX",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "SGU",
		"airport2": "SLC",
		"cnt": "248"
	},
	{
		"airline": "OO",
		"airport1": "GJT",
		"airport2": "LAX",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SJC",
		"cnt": "125"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "IND",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "RAP",
		"cnt": "184"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "DFW",
		"cnt": "36"
	},
	{
		"airline": "OO",
		"airport1": "SMF",
		"airport2": "ACV",
		"cnt": "96"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "LAS",
		"cnt": "389"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "HLN",
		"cnt": "108"
	},
	{
		"airline": "OO",
		"airport1": "BIS",
		"airport2": "SLC",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "CRW",
		"cnt": "4"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "SMF",
		"cnt": "392"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "RDU",
		"cnt": "22"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "MTJ",
		"cnt": "16"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "OKC",
		"cnt": "109"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "OMA",
		"cnt": "49"
	},
	{
		"airline": "OO",
		"airport1": "PSC",
		"airport2": "DEN",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "ABQ",
		"cnt": "298"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "OKC",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "PHX",
		"cnt": "72"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "MSP",
		"cnt": "17"
	},
	{
		"airline": "OO",
		"airport1": "ICT",
		"airport2": "ORD",
		"cnt": "31"
	},
	{
		"airline": "OO",
		"airport1": "DSM",
		"airport2": "DEN",
		"cnt": "33"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "RDM",
		"cnt": "108"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "OMA",
		"cnt": "100"
	},
	{
		"airline": "OO",
		"airport1": "SAN",
		"airport2": "SFO",
		"cnt": "64"
	},
	{
		"airline": "OO",
		"airport1": "MTJ",
		"airport2": "DEN",
		"cnt": "166"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "BOI",
		"cnt": "219"
	},
	{
		"airline": "OO",
		"airport1": "PDX",
		"airport2": "DEN",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "IPL",
		"airport2": "LAX",
		"cnt": "77"
	},
	{
		"airline": "OO",
		"airport1": "ELP",
		"airport2": "IAH",
		"cnt": "123"
	},
	{
		"airline": "OO",
		"airport1": "SJC",
		"airport2": "SLC",
		"cnt": "238"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "PIA",
		"cnt": "62"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "IYK",
		"cnt": "146"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "PSP",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "BIS",
		"airport2": "MSP",
		"cnt": "139"
	},
	{
		"airline": "OO",
		"airport1": "RKS",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "LMT",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "PIT",
		"cnt": "55"
	},
	{
		"airline": "OO",
		"airport1": "COS",
		"airport2": "MSP",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "PSP",
		"airport2": "SFO",
		"cnt": "224"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "ONT",
		"cnt": "224"
	},
	{
		"airline": "OO",
		"airport1": "LSE",
		"airport2": "MSP",
		"cnt": "76"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "FAR",
		"cnt": "138"
	},
	{
		"airline": "OO",
		"airport1": "ONT",
		"airport2": "DEN",
		"cnt": "4"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "JAC",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "DSM",
		"airport2": "IAH",
		"cnt": "28"
	},
	{
		"airline": "OO",
		"airport1": "SDF",
		"airport2": "ORD",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "COS",
		"airport2": "LAX",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "ABQ",
		"cnt": "2"
	},
	{
		"airline": "OO",
		"airport1": "DFW",
		"airport2": "ORD",
		"cnt": "78"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "CMH",
		"cnt": "2"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "SFO",
		"cnt": "494"
	},
	{
		"airline": "OO",
		"airport1": "IAD",
		"airport2": "AUS",
		"cnt": "16"
	},
	{
		"airline": "OO",
		"airport1": "ABQ",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "ORD",
		"cnt": "4"
	},
	{
		"airline": "OO",
		"airport1": "CEC",
		"airport2": "SFO",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "ORF",
		"cnt": "30"
	},
	{
		"airline": "OO",
		"airport1": "ABQ",
		"airport2": "IAH",
		"cnt": "55"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "DFW",
		"cnt": "52"
	},
	{
		"airline": "OO",
		"airport1": "DTW",
		"airport2": "DEN",
		"cnt": "18"
	},
	{
		"airline": "OO",
		"airport1": "STL",
		"airport2": "DEN",
		"cnt": "18"
	},
	{
		"airline": "OO",
		"airport1": "BOI",
		"airport2": "DEN",
		"cnt": "244"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "TUS",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "SNA",
		"airport2": "SLC",
		"cnt": "88"
	},
	{
		"airline": "OO",
		"airport1": "SEA",
		"airport2": "LAX",
		"cnt": "209"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "TUL",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "DFW",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SLC",
		"cnt": "324"
	},
	{
		"airline": "OO",
		"airport1": "FSD",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "FAT",
		"airport2": "SFO",
		"cnt": "244"
	},
	{
		"airline": "OO",
		"airport1": "HLN",
		"airport2": "MSP",
		"cnt": "2"
	},
	{
		"airline": "OO",
		"airport1": "BNA",
		"airport2": "CVG",
		"cnt": "12"
	},
	{
		"airline": "OO",
		"airport1": "PDX",
		"airport2": "SLC",
		"cnt": "198"
	},
	{
		"airline": "OO",
		"airport1": "COD",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "JAC",
		"airport2": "SLC",
		"cnt": "91"
	},
	{
		"airline": "OO",
		"airport1": "CMH",
		"airport2": "MSP",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "TUS",
		"cnt": "139"
	},
	{
		"airline": "OO",
		"airport1": "CWA",
		"airport2": "EAU",
		"cnt": "48"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "LIT",
		"cnt": "19"
	},
	{
		"airline": "OO",
		"airport1": "BZN",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "GCC",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "SBA",
		"airport2": "SFO",
		"cnt": "430"
	},
	{
		"airline": "OO",
		"airport1": "PDX",
		"airport2": "SEA",
		"cnt": "468"
	},
	{
		"airline": "OO",
		"airport1": "ELP",
		"airport2": "DEN",
		"cnt": "72"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "SNA",
		"cnt": "176"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "RDD",
		"cnt": "248"
	},
	{
		"airline": "OO",
		"airport1": "MSO",
		"airport2": "SLC",
		"cnt": "238"
	},
	{
		"airline": "OO",
		"airport1": "BNA",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "51"
	},
	{
		"airline": "OO",
		"airport1": "MBS",
		"airport2": "ORD",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "MSN",
		"airport2": "ORD",
		"cnt": "170"
	},
	{
		"airline": "OO",
		"airport1": "DLH",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "RDM",
		"airport2": "PSP",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "CPR",
		"cnt": "208"
	},
	{
		"airline": "OO",
		"airport1": "PIA",
		"airport2": "DEN",
		"cnt": "11"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "YUM",
		"cnt": "268"
	},
	{
		"airline": "OO",
		"airport1": "DTW",
		"airport2": "IAH",
		"cnt": "58"
	},
	{
		"airline": "OO",
		"airport1": "PDX",
		"airport2": "LMT",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "ONT",
		"airport2": "SLC",
		"cnt": "238"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MCI",
		"cnt": "24"
	},
	{
		"airline": "OO",
		"airport1": "HLN",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "BUR",
		"airport2": "SLC",
		"cnt": "158"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SMF",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "PHX",
		"cnt": "232"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "RAP",
		"cnt": "214"
	},
	{
		"airline": "OO",
		"airport1": "LAS",
		"airport2": "PSP",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "TUL",
		"cnt": "51"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "MKE",
		"cnt": "8"
	},
	{
		"airline": "OO",
		"airport1": "CVG",
		"airport2": "ORD",
		"cnt": "63"
	},
	{
		"airline": "OO",
		"airport1": "IAD",
		"airport2": "PIT",
		"cnt": "6"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "IND",
		"cnt": "28"
	},
	{
		"airline": "OO",
		"airport1": "BNA",
		"airport2": "ORD",
		"cnt": "28"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SBA",
		"cnt": "434"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "HDN",
		"cnt": "224"
	},
	{
		"airline": "OO",
		"airport1": "SMF",
		"airport2": "RNO",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MLI",
		"cnt": "69"
	},
	{
		"airline": "OO",
		"airport1": "FCA",
		"airport2": "SLC",
		"cnt": "166"
	},
	{
		"airline": "OO",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "26"
	},
	{
		"airline": "OO",
		"airport1": "DSM",
		"airport2": "MSP",
		"cnt": "60"
	},
	{
		"airline": "OO",
		"airport1": "BZN",
		"airport2": "DEN",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "DTW",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "COS",
		"airport2": "IAH",
		"cnt": "155"
	},
	{
		"airline": "OO",
		"airport1": "PHX",
		"airport2": "SLC",
		"cnt": "159"
	},
	{
		"airline": "OO",
		"airport1": "MEM",
		"airport2": "ORD",
		"cnt": "53"
	},
	{
		"airline": "OO",
		"airport1": "ASE",
		"airport2": "IAH",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "RNO",
		"cnt": "156"
	},
	{
		"airline": "OO",
		"airport1": "IPL",
		"airport2": "YUM",
		"cnt": "31"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "BIS",
		"cnt": "163"
	},
	{
		"airline": "OO",
		"airport1": "SBP",
		"airport2": "LAX",
		"cnt": "326"
	},
	{
		"airline": "OO",
		"airport1": "LNK",
		"airport2": "ORD",
		"cnt": "95"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "SGF",
		"cnt": "70"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "FSD",
		"cnt": "28"
	},
	{
		"airline": "OO",
		"airport1": "ATW",
		"airport2": "ORD",
		"cnt": "60"
	},
	{
		"airline": "OO",
		"airport1": "XNA",
		"airport2": "ORD",
		"cnt": "16"
	},
	{
		"airline": "OO",
		"airport1": "BIL",
		"airport2": "DEN",
		"cnt": "120"
	},
	{
		"airline": "OO",
		"airport1": "MLI",
		"airport2": "ORD",
		"cnt": "105"
	},
	{
		"airline": "OO",
		"airport1": "MSN",
		"airport2": "DEN",
		"cnt": "82"
	},
	{
		"airline": "OO",
		"airport1": "CVG",
		"airport2": "MSP",
		"cnt": "12"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "TYS",
		"cnt": "60"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "CLE",
		"cnt": "52"
	},
	{
		"airline": "OO",
		"airport1": "PDX",
		"airport2": "OTH",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "OMA",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SBA",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "GEG",
		"cnt": "188"
	},
	{
		"airline": "OO",
		"airport1": "TUL",
		"airport2": "ORD",
		"cnt": "60"
	},
	{
		"airline": "OO",
		"airport1": "CLE",
		"airport2": "CVG",
		"cnt": "52"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "GUC",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "IAH",
		"cnt": "53"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "PIH",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "CDC",
		"cnt": "96"
	},
	{
		"airline": "OO",
		"airport1": "OMA",
		"airport2": "SLC",
		"cnt": "132"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "LWS",
		"cnt": "102"
	},
	{
		"airline": "OO",
		"airport1": "OKC",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "AUS",
		"airport2": "DEN",
		"cnt": "32"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "IAH",
		"cnt": "208"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "DLH",
		"cnt": "58"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "FCA",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "LAS",
		"cnt": "87"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "XNA",
		"cnt": "27"
	},
	{
		"airline": "OO",
		"airport1": "EAU",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "MEM",
		"airport2": "MSP",
		"cnt": "11"
	},
	{
		"airline": "OO",
		"airport1": "GCC",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "XNA",
		"airport2": "IAH",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "MEM",
		"airport2": "SLC",
		"cnt": "70"
	},
	{
		"airline": "OO",
		"airport1": "SAT",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "BIL",
		"airport2": "SLC",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "TUL",
		"airport2": "LAX",
		"cnt": "35"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "MRY",
		"cnt": "330"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "STL",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "BNA",
		"cnt": "4"
	},
	{
		"airline": "OO",
		"airport1": "SUN",
		"airport2": "SLC",
		"cnt": "392"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "MOT",
		"cnt": "202"
	},
	{
		"airline": "OO",
		"airport1": "PIT",
		"airport2": "MSP",
		"cnt": "28"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SFO",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "OTH",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "FAR",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "TVC",
		"cnt": "44"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "MFR",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "PDX",
		"airport2": "RDM",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "FAT",
		"airport2": "LAS",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "PSC",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "FAT",
		"airport2": "LAX",
		"cnt": "294"
	},
	{
		"airline": "OO",
		"airport1": "ABQ",
		"airport2": "DEN",
		"cnt": "159"
	},
	{
		"airline": "OO",
		"airport1": "RNO",
		"airport2": "DEN",
		"cnt": "73"
	},
	{
		"airline": "OO",
		"airport1": "CLT",
		"airport2": "IAH",
		"cnt": "62"
	},
	{
		"airline": "OO",
		"airport1": "PAH",
		"airport2": "LIT",
		"cnt": "1"
	},
	{
		"airline": "OO",
		"airport1": "LAN",
		"airport2": "ORD",
		"cnt": "169"
	},
	{
		"airline": "OO",
		"airport1": "SAN",
		"airport2": "SLC",
		"cnt": "76"
	},
	{
		"airline": "OO",
		"airport1": "CID",
		"airport2": "ORD",
		"cnt": "126"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "CAK",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "GRR",
		"airport2": "DEN",
		"cnt": "3"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "EGE",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "RAP",
		"cnt": "10"
	},
	{
		"airline": "OO",
		"airport1": "DAY",
		"airport2": "DEN",
		"cnt": "8"
	},
	{
		"airline": "OO",
		"airport1": "STL",
		"airport2": "IAH",
		"cnt": "22"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "MCI",
		"cnt": "81"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "FCA",
		"cnt": "34"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "TYS",
		"cnt": "33"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "ICT",
		"cnt": "48"
	},
	{
		"airline": "OO",
		"airport1": "MSO",
		"airport2": "DEN",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "PSP",
		"airport2": "DEN",
		"cnt": "192"
	},
	{
		"airline": "OO",
		"airport1": "SMF",
		"airport2": "SLC",
		"cnt": "209"
	},
	{
		"airline": "OO",
		"airport1": "OMA",
		"airport2": "DEN",
		"cnt": "36"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SAN",
		"cnt": "1044"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "LNK",
		"cnt": "127"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SEA",
		"cnt": "26"
	},
	{
		"airline": "OO",
		"airport1": "IAD",
		"airport2": "IND",
		"cnt": "16"
	},
	{
		"airline": "OO",
		"airport1": "BFL",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "LEX",
		"cnt": "138"
	},
	{
		"airline": "OO",
		"airport1": "MKE",
		"airport2": "PIT",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "ATL",
		"cnt": "64"
	},
	{
		"airline": "OO",
		"airport1": "DFW",
		"airport2": "SLC",
		"cnt": "110"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "CVG",
		"cnt": "2"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "MCI",
		"cnt": "152"
	},
	{
		"airline": "OO",
		"airport1": "ELP",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "MCI",
		"airport2": "MSP",
		"cnt": "24"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "GRR",
		"cnt": "32"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "SBN",
		"cnt": "124"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "PSC",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "EKO",
		"airport2": "SLC",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "CID",
		"airport2": "DEN",
		"cnt": "45"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "GRR",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "MOD",
		"airport2": "SFO",
		"cnt": "216"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "COS",
		"cnt": "604"
	},
	{
		"airline": "OO",
		"airport1": "CVG",
		"airport2": "IAH",
		"cnt": "26"
	},
	{
		"airline": "OO",
		"airport1": "COS",
		"airport2": "SFO",
		"cnt": "55"
	},
	{
		"airline": "OO",
		"airport1": "PHX",
		"airport2": "SFO",
		"cnt": "72"
	},
	{
		"airline": "OO",
		"airport1": "CVG",
		"airport2": "MKE",
		"cnt": "48"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "ORD",
		"cnt": "326"
	},
	{
		"airline": "OO",
		"airport1": "CLE",
		"airport2": "DCA",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "RNO",
		"cnt": "269"
	},
	{
		"airline": "OO",
		"airport1": "CMH",
		"airport2": "ORD",
		"cnt": "18"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "BOI",
		"cnt": "10"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "PDX",
		"cnt": "203"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "GTF",
		"cnt": "108"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "SAT",
		"cnt": "102"
	},
	{
		"airline": "OO",
		"airport1": "SFO",
		"airport2": "EUG",
		"cnt": "328"
	},
	{
		"airline": "OO",
		"airport1": "SLC",
		"airport2": "EUG",
		"cnt": "105"
	},
	{
		"airline": "OO",
		"airport1": "LAS",
		"airport2": "DEN",
		"cnt": "42"
	},
	{
		"airline": "OO",
		"airport1": "SDF",
		"airport2": "DEN",
		"cnt": "2"
	},
	{
		"airline": "OO",
		"airport1": "DAY",
		"airport2": "MSP",
		"cnt": "60"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "SJC",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "BUR",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "OO",
		"airport1": "BOI",
		"airport2": "SFO",
		"cnt": "224"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "SPI",
		"cnt": "160"
	},
	{
		"airline": "OO",
		"airport1": "DFW",
		"airport2": "MSP",
		"cnt": "12"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "CLE",
		"cnt": "104"
	},
	{
		"airline": "OO",
		"airport1": "RDM",
		"airport2": "SFO",
		"cnt": "164"
	},
	{
		"airline": "OO",
		"airport1": "TUS",
		"airport2": "DEN",
		"cnt": "315"
	},
	{
		"airline": "OO",
		"airport1": "LAX",
		"airport2": "MRY",
		"cnt": "168"
	},
	{
		"airline": "OO",
		"airport1": "MSP",
		"airport2": "TUL",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "DEN",
		"airport2": "MOT",
		"cnt": "108"
	},
	{
		"airline": "OO",
		"airport1": "CMH",
		"airport2": "IAH",
		"cnt": "46"
	},
	{
		"airline": "OO",
		"airport1": "MFR",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "OO",
		"airport1": "IAH",
		"airport2": "AUS",
		"cnt": "20"
	},
	{
		"airline": "OO",
		"airport1": "ORD",
		"airport2": "IAH",
		"cnt": "3"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MOB",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "STL",
		"cnt": "90"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MLI",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "RSW",
		"cnt": "284"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "XNA",
		"airport2": "DFW",
		"cnt": "437"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "BWI",
		"cnt": "364"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "LAX",
		"cnt": "90"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "MHT",
		"cnt": "412"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CAK",
		"airport2": "ORD",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "ORD",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "HNL",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "STL",
		"cnt": "134"
	},
	{
		"airline": "all",
		"airport1": "AGS",
		"airport2": "ATL",
		"cnt": "512"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SAN",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ROC",
		"airport2": "ORD",
		"cnt": "451"
	},
	{
		"airline": "all",
		"airport1": "LBB",
		"airport2": "DFW",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "ABE",
		"airport2": "ORD",
		"cnt": "353"
	},
	{
		"airline": "all",
		"airport1": "MFE",
		"airport2": "MEM",
		"cnt": "45"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "DFW",
		"cnt": "661"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "BOS",
		"cnt": "422"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SAT",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "ACV",
		"airport2": "SFO",
		"cnt": "340"
	},
	{
		"airline": "all",
		"airport1": "GCC",
		"airport2": "RKS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ONT",
		"airport2": "SEA",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "LEX",
		"cnt": "346"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "IAD",
		"cnt": "418"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "OAK",
		"cnt": "472"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "BWI",
		"cnt": "966"
	},
	{
		"airline": "all",
		"airport1": "JAN",
		"airport2": "MDW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "LAX",
		"cnt": "263"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "ROC",
		"cnt": "184"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "LAS",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "TRI",
		"cnt": "347"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "LGA",
		"cnt": "776"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "PSP",
		"cnt": "320"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "CLE",
		"cnt": "22"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "SBP",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "CLT",
		"cnt": "364"
	},
	{
		"airline": "all",
		"airport1": "AVP",
		"airport2": "CLT",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "RIC",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "PBI",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "AVL",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "TUS",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "JAC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AMA",
		"airport2": "DAL",
		"cnt": "321"
	},
	{
		"airline": "all",
		"airport1": "FLG",
		"airport2": "PHX",
		"cnt": "310"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "DTW",
		"cnt": "132"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "EWR",
		"cnt": "132"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "STT",
		"cnt": "17"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "SLC",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SNA",
		"cnt": "479"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "GEG",
		"cnt": "148"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "AGS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "OGG",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "JAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MYR",
		"cnt": "262"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "MSY",
		"cnt": "23"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "PHX",
		"cnt": "575"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "LGA",
		"cnt": "394"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "MDW",
		"cnt": "528"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "MDT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "BUF",
		"cnt": "124"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "DCA",
		"cnt": "343"
	},
	{
		"airline": "all",
		"airport1": "GSO",
		"airport2": "ORD",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "ONT",
		"cnt": "421"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "OAK",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "MDW",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "JAX",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "JAX",
		"cnt": "270"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "CLE",
		"cnt": "341"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "MEM",
		"cnt": "218"
	},
	{
		"airline": "all",
		"airport1": "BRO",
		"airport2": "IAH",
		"cnt": "262"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "MSP",
		"cnt": "432"
	},
	{
		"airline": "all",
		"airport1": "SDF",
		"airport2": "CLE",
		"cnt": "71"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "ILM",
		"cnt": "228"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "CLT",
		"cnt": "476"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SDF",
		"cnt": "70"
	},
	{
		"airline": "all",
		"airport1": "ORF",
		"airport2": "IAD",
		"cnt": "296"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "DAY",
		"cnt": "144"
	},
	{
		"airline": "all",
		"airport1": "RST",
		"airport2": "ORD",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "BLI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ISP",
		"airport2": "RSW",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "DEN",
		"cnt": "153"
	},
	{
		"airline": "all",
		"airport1": "TYS",
		"airport2": "IAD",
		"cnt": "140"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "YUM",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "STL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "OKC",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "SDF",
		"airport2": "DFW",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "HRL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "CLD",
		"airport2": "LAX",
		"cnt": "324"
	},
	{
		"airline": "all",
		"airport1": "RIC",
		"airport2": "CLT",
		"cnt": "268"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "ORD",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "SJU",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "LEX",
		"airport2": "MEM",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATW",
		"airport2": "ORD",
		"cnt": "288"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "PDX",
		"cnt": "146"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "RDM",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "TPA",
		"cnt": "362"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "TLH",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "ATL",
		"cnt": "88"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "SAT",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "ROA",
		"airport2": "ORD",
		"cnt": "73"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PHL",
		"cnt": "1018"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "BWI",
		"cnt": "202"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "JFK",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PHX",
		"cnt": "767"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "AVL",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MQT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "DSM",
		"cnt": "468"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "DEN",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "CLT",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "EWR",
		"cnt": "260"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SFO",
		"cnt": "109"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "ATL",
		"cnt": "97"
	},
	{
		"airline": "all",
		"airport1": "MOB",
		"airport2": "IAH",
		"cnt": "260"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ILM",
		"cnt": "325"
	},
	{
		"airline": "all",
		"airport1": "SNA",
		"airport2": "IAH",
		"cnt": "252"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SJU",
		"cnt": "371"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "LIH",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MSN",
		"airport2": "ORD",
		"cnt": "429"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "DFW",
		"cnt": "1028"
	},
	{
		"airline": "all",
		"airport1": "FAT",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CHS",
		"airport2": "EWR",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "LIH",
		"airport2": "PHX",
		"cnt": "42"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "IAH",
		"cnt": "449"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "IAD",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "ITO",
		"airport2": "HNL",
		"cnt": "1016"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "RDU",
		"cnt": "259"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "DBQ",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "IAH",
		"cnt": "242"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MKE",
		"cnt": "319"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "IAD",
		"cnt": "559"
	},
	{
		"airline": "all",
		"airport1": "TUS",
		"airport2": "SFO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "FWA",
		"airport2": "ORD",
		"cnt": "312"
	},
	{
		"airline": "all",
		"airport1": "CEC",
		"airport2": "ACV",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "CRW",
		"airport2": "MCO",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "ABE",
		"airport2": "ATL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "TYS",
		"cnt": "34"
	},
	{
		"airline": "all",
		"airport1": "GSP",
		"airport2": "CVG",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "MCI",
		"cnt": "154"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "MCO",
		"cnt": "162"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "ATL",
		"cnt": "977"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "ROC",
		"cnt": "159"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MCI",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "ONT",
		"cnt": "222"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "ORF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "ORD",
		"cnt": "830"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "STL",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "LAS",
		"cnt": "1759"
	},
	{
		"airline": "all",
		"airport1": "TYS",
		"airport2": "ORD",
		"cnt": "456"
	},
	{
		"airline": "all",
		"airport1": "AEX",
		"airport2": "IAH",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "ASE",
		"cnt": "610"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "RDU",
		"cnt": "312"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "IND",
		"cnt": "278"
	},
	{
		"airline": "all",
		"airport1": "CMX",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "LGA",
		"cnt": "479"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "EVV",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SGU",
		"airport2": "SLC",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "ISP",
		"airport2": "PBI",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "FSD",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "DFW",
		"cnt": "336"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "BIL",
		"cnt": "23"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SRQ",
		"cnt": "446"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "DFW",
		"cnt": "628"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "ACV",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "HLN",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "CVG",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "BIS",
		"airport2": "SLC",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "OAK",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "SRQ",
		"cnt": "68"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "HSV",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DAB",
		"airport2": "ATL",
		"cnt": "247"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BTR",
		"cnt": "420"
	},
	{
		"airline": "all",
		"airport1": "TLH",
		"airport2": "MIA",
		"cnt": "144"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "MHT",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "CLE",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "SFO",
		"cnt": "167"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "DEN",
		"cnt": "308"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "BWI",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "JAX",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "DTW",
		"cnt": "400"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "PHX",
		"cnt": "314"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "TPA",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "MFE",
		"airport2": "DFW",
		"cnt": "214"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "DEN",
		"cnt": "146"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "SAN",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "STT",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "MIA",
		"cnt": "616"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "ALB",
		"cnt": "202"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MLI",
		"airport2": "RSW",
		"cnt": "14"
	},
	{
		"airline": "all",
		"airport1": "MTJ",
		"airport2": "DEN",
		"cnt": "222"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "SAT",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "FLL",
		"cnt": "802"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "CMH",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MIA",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "PHL",
		"cnt": "539"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PIA",
		"cnt": "215"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "PSP",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "STL",
		"cnt": "147"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "STL",
		"cnt": "464"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "LMT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "BRW",
		"airport2": "ANC",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "LSE",
		"airport2": "MSP",
		"cnt": "76"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "EWR",
		"cnt": "318"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "IAH",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "RDU",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "SAN",
		"cnt": "376"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "CMH",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "IAH",
		"cnt": "550"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "MKE",
		"cnt": "186"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "PHX",
		"cnt": "256"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "RSW",
		"cnt": "297"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "CMH",
		"cnt": "68"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "SLC",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "DTW",
		"cnt": "314"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "DFW",
		"cnt": "414"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "FAT",
		"cnt": "558"
	},
	{
		"airline": "all",
		"airport1": "VPS",
		"airport2": "IAH",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "ORF",
		"cnt": "190"
	},
	{
		"airline": "all",
		"airport1": "ABY",
		"airport2": "ATL",
		"cnt": "148"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "PBI",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "IAH",
		"cnt": "310"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "DTW",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "DFW",
		"cnt": "1053"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "JAN",
		"cnt": "408"
	},
	{
		"airline": "all",
		"airport1": "EGE",
		"airport2": "MIA",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "RSW",
		"cnt": "136"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "LGB",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "LGA",
		"cnt": "259"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "JAC",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "ASE",
		"airport2": "LAX",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "JAX",
		"cnt": "852"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "XNA",
		"cnt": "93"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "TUL",
		"cnt": "232"
	},
	{
		"airline": "all",
		"airport1": "FSD",
		"airport2": "DEN",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "FAT",
		"airport2": "SFO",
		"cnt": "244"
	},
	{
		"airline": "all",
		"airport1": "SYR",
		"airport2": "DCA",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "DTW",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "MSP",
		"cnt": "20"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "TUS",
		"cnt": "232"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "PNS",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "BZN",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "MIA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "GCC",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "SEA",
		"cnt": "468"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "OMA",
		"cnt": "259"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "DEN",
		"cnt": "161"
	},
	{
		"airline": "all",
		"airport1": "FAI",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "SNA",
		"cnt": "686"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "ORF",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "ORD",
		"cnt": "525"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "RDD",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "BWI",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "FLL",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "JAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "PHF",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "BWI",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SWF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DLH",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "CRW",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "RDM",
		"airport2": "PSP",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "ATL",
		"cnt": "368"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "CRP",
		"cnt": "492"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "CMI",
		"cnt": "306"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "CMH",
		"cnt": "714"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "MKE",
		"cnt": "118"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "SEA",
		"cnt": "765"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "CLE",
		"cnt": "186"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "IAD",
		"cnt": "92"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "IAH",
		"cnt": "500"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "KOA",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "PIT",
		"cnt": "173"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "IAH",
		"cnt": "323"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "PIA",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "CLE",
		"cnt": "330"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "PHX",
		"cnt": "1149"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "CLT",
		"cnt": "716"
	},
	{
		"airline": "all",
		"airport1": "GSO",
		"airport2": "IAH",
		"cnt": "97"
	},
	{
		"airline": "all",
		"airport1": "LBB",
		"airport2": "IAH",
		"cnt": "202"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "PHL",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "SFO",
		"cnt": "204"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "GTR",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "PDX",
		"cnt": "300"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "TPA",
		"cnt": "298"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "LGB",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BTV",
		"airport2": "JFK",
		"cnt": "200"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "TPA",
		"cnt": "1033"
	},
	{
		"airline": "all",
		"airport1": "IDA",
		"airport2": "DEN",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "ICT",
		"cnt": "214"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "MIA",
		"cnt": "615"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "SEA",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "ECP",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "PIT",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "MSY",
		"cnt": "46"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "MSP",
		"cnt": "262"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "SJU",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "ROC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "MCO",
		"cnt": "772"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "BWI",
		"cnt": "270"
	},
	{
		"airline": "all",
		"airport1": "BZN",
		"airport2": "DEN",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "GPT",
		"airport2": "TPA",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "IAD",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "IAH",
		"cnt": "351"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MHT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "PWM",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "ATL",
		"cnt": "1162"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "JAC",
		"cnt": "190"
	},
	{
		"airline": "all",
		"airport1": "PBI",
		"airport2": "DTW",
		"cnt": "157"
	},
	{
		"airline": "all",
		"airport1": "IPL",
		"airport2": "YUM",
		"cnt": "31"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "CLT",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "FLL",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "IAH",
		"cnt": "262"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "RSW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ASE",
		"airport2": "ORD",
		"cnt": "236"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "TUS",
		"cnt": "271"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "RSW",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "MCO",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "TUL",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "MCI",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "SRQ",
		"airport2": "DTW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "HNL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "MEM",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "MSP",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "ROC",
		"airport2": "RSW",
		"cnt": "18"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "TPA",
		"cnt": "260"
	},
	{
		"airline": "all",
		"airport1": "ELM",
		"airport2": "DTW",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "PBI",
		"cnt": "500"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SBA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "CVG",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "ECP",
		"airport2": "HOU",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "SLC",
		"cnt": "238"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MEM",
		"cnt": "685"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MEI",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "RSW",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "LAX",
		"cnt": "380"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "IAH",
		"cnt": "334"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "LAS",
		"cnt": "126"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "SNA",
		"cnt": "438"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "JFK",
		"cnt": "145"
	},
	{
		"airline": "all",
		"airport1": "EAU",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "BNA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "CMH",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "GRK",
		"airport2": "IAH",
		"cnt": "29"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "STL",
		"cnt": "233"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "PBI",
		"cnt": "712"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "LIH",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "FAR",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SBN",
		"airport2": "DTW",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "FAT",
		"airport2": "LAS",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "MTJ",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "GSP",
		"cnt": "82"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "GTR",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BQN",
		"airport2": "JFK",
		"cnt": "81"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PVD",
		"cnt": "118"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MSY",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "IAD",
		"cnt": "526"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "IAH",
		"cnt": "530"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MSP",
		"cnt": "789"
	},
	{
		"airline": "all",
		"airport1": "BKG",
		"airport2": "MCO",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "YAK",
		"airport2": "CDV",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AZO",
		"airport2": "ORD",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "RIC",
		"airport2": "ATL",
		"cnt": "594"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "DEN",
		"cnt": "11"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "EGE",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "LAX",
		"cnt": "376"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "HOU",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SDF",
		"cnt": "207"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "FLL",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "CVG",
		"cnt": "198"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "EUG",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "STL",
		"cnt": "330"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "IAD",
		"cnt": "90"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "IAH",
		"cnt": "582"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "BMI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MCO",
		"cnt": "436"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "FCA",
		"cnt": "34"
	},
	{
		"airline": "all",
		"airport1": "FNT",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "LRD",
		"cnt": "180"
	},
	{
		"airline": "all",
		"airport1": "JAC",
		"airport2": "ORD",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "ICT",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "RIC",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "RDU",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PDX",
		"cnt": "290"
	},
	{
		"airline": "all",
		"airport1": "PSP",
		"airport2": "DEN",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "DFW",
		"cnt": "486"
	},
	{
		"airline": "all",
		"airport1": "HSV",
		"airport2": "MEM",
		"cnt": "116"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "PHX",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "ATL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "SJU",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "JFK",
		"cnt": "327"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "ORD",
		"cnt": "529"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "MSP",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "RDU",
		"cnt": "200"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "JFK",
		"cnt": "98"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SAT",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SAN",
		"cnt": "648"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "PVD",
		"cnt": "454"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "BFL",
		"airport2": "PHX",
		"cnt": "176"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "LAS",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "BDL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "RNO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "CLT",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "LAX",
		"cnt": "249"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "LGB",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "ORD",
		"cnt": "386"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SBN",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MHK",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "CHO",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "SDF",
		"cnt": "142"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "MKE",
		"cnt": "265"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SLC",
		"cnt": "473"
	},
	{
		"airline": "all",
		"airport1": "BQN",
		"airport2": "MCO",
		"cnt": "46"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "LAX",
		"cnt": "241"
	},
	{
		"airline": "all",
		"airport1": "MOD",
		"airport2": "SFO",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "ECP",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "BDL",
		"cnt": "162"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "PDX",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "BIS",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "IAH",
		"cnt": "238"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "CLT",
		"cnt": "915"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "SFO",
		"cnt": "55"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "VPS",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "DAL",
		"cnt": "412"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "EWR",
		"cnt": "236"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "SFO",
		"cnt": "754"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "BOS",
		"cnt": "30"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "BOI",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SAN",
		"cnt": "779"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MDT",
		"cnt": "214"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "ATL",
		"cnt": "595"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MDW",
		"cnt": "668"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PHF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SAT",
		"cnt": "246"
	},
	{
		"airline": "all",
		"airport1": "PNS",
		"airport2": "ATL",
		"cnt": "574"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PHL",
		"cnt": "874"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "EWR",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "MDW",
		"cnt": "267"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "SMF",
		"cnt": "266"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "EUG",
		"cnt": "105"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "CLE",
		"cnt": "105"
	},
	{
		"airline": "all",
		"airport1": "BIL",
		"airport2": "SLC",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "SJC",
		"cnt": "198"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "PHX",
		"cnt": "337"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "SJC",
		"cnt": "1014"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "XNA",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "SJU",
		"cnt": "16"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "ABE",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "LAS",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "LGA",
		"cnt": "772"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "TUL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "DCA",
		"cnt": "320"
	},
	{
		"airline": "all",
		"airport1": "HDN",
		"airport2": "EWR",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "MFR",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "CLE",
		"cnt": "54"
	},
	{
		"airline": "all",
		"airport1": "CRW",
		"airport2": "LGA",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "GJT",
		"airport2": "ASE",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "TUS",
		"cnt": "40"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "SEA",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "SDF",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORF",
		"airport2": "ATL",
		"cnt": "334"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "ABQ",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "BOS",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "IAD",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "ASE",
		"airport2": "SFO",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MKE",
		"cnt": "99"
	},
	{
		"airline": "all",
		"airport1": "TYS",
		"airport2": "IAH",
		"cnt": "163"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "OGG",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "GSP",
		"cnt": "332"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "LAX",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "CLT",
		"cnt": "580"
	},
	{
		"airline": "all",
		"airport1": "GSO",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "LAS",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "MEM",
		"cnt": "137"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "IAH",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "CLE",
		"cnt": "154"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "PHL",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PWM",
		"cnt": "63"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "IAH",
		"cnt": "348"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "HOU",
		"cnt": "372"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "PIT",
		"cnt": "474"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "SAN",
		"cnt": "644"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "FLL",
		"cnt": "688"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "LBB",
		"cnt": "312"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "PDX",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "PDX",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "DSM",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "LGB",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "PDX",
		"cnt": "106"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "MDW",
		"cnt": "357"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "CID",
		"cnt": "61"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "PHX",
		"cnt": "647"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "HDN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BFL",
		"airport2": "SFO",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "DTW",
		"cnt": "107"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "SAV",
		"cnt": "148"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "SAT",
		"cnt": "92"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "RIC",
		"cnt": "308"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "KOA",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "RNO",
		"cnt": "546"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "MCO",
		"cnt": "16"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "PIT",
		"cnt": "250"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "CLT",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "SAT",
		"cnt": "709"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SAN",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "SMF",
		"cnt": "427"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "RSW",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "SCC",
		"airport2": "BRW",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "GUM",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "IAD",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "PVD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "DTW",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "GEG",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "PDX",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "ANC",
		"cnt": "750"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "CLE",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "CLL",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "BWI",
		"cnt": "464"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "DFW",
		"cnt": "500"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "FLL",
		"cnt": "268"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "DAY",
		"cnt": "379"
	},
	{
		"airline": "all",
		"airport1": "FAT",
		"airport2": "DEN",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "SBP",
		"airport2": "SFO",
		"cnt": "274"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "LIH",
		"cnt": "176"
	},
	{
		"airline": "all",
		"airport1": "TYS",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BIS",
		"airport2": "CLE",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "MMH",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "IAH",
		"cnt": "414"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "TPA",
		"cnt": "366"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "LIH",
		"cnt": "1264"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "ORD",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "ORF",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "DEN",
		"cnt": "368"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MEM",
		"cnt": "408"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "DCA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SEA",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "CLT",
		"cnt": "40"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "DFW",
		"cnt": "148"
	},
	{
		"airline": "all",
		"airport1": "LCH",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "LIT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "MSY",
		"cnt": "132"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "GUC",
		"cnt": "116"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "MSN",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "SMF",
		"cnt": "646"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "OAK",
		"cnt": "169"
	},
	{
		"airline": "all",
		"airport1": "RAP",
		"airport2": "SLC",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "PSP",
		"airport2": "LAX",
		"cnt": "354"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "AUS",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "DTW",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "PSP",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "TUS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "SMX",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PAH",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "STT",
		"airport2": "EWR",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "PDX",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TOL",
		"airport2": "ORD",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BWI",
		"cnt": "849"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "DFW",
		"cnt": "326"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "MSY",
		"cnt": "521"
	},
	{
		"airline": "all",
		"airport1": "BRO",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "CMH",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CID",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "HOU",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "AMA",
		"airport2": "DEN",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "CPR",
		"airport2": "SLC",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "RIC",
		"airport2": "EWR",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "HOU",
		"cnt": "1286"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "MCO",
		"cnt": "600"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "ONT",
		"cnt": "419"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "DCA",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "PDX",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MDW",
		"cnt": "439"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "TUS",
		"cnt": "497"
	},
	{
		"airline": "all",
		"airport1": "STT",
		"airport2": "BOS",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "ROA",
		"cnt": "87"
	},
	{
		"airline": "all",
		"airport1": "CHS",
		"airport2": "ORD",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "ROC",
		"cnt": "194"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "PIT",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "TUL",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "LIT",
		"cnt": "550"
	},
	{
		"airline": "all",
		"airport1": "EYW",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "IAD",
		"cnt": "72"
	},
	{
		"airline": "all",
		"airport1": "HDN",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TYS",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "MHT",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "GRB",
		"airport2": "MSP",
		"cnt": "75"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "SAT",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "IAH",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "SYR",
		"airport2": "ORD",
		"cnt": "407"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "DFW",
		"cnt": "436"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "BOS",
		"cnt": "408"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PIT",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "BNA",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SWF",
		"cnt": "47"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MGM",
		"cnt": "372"
	},
	{
		"airline": "all",
		"airport1": "TUL",
		"airport2": "EWR",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "DAL",
		"cnt": "159"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "FLL",
		"cnt": "247"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "SNA",
		"cnt": "314"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "EWR",
		"cnt": "300"
	},
	{
		"airline": "all",
		"airport1": "HSV",
		"airport2": "DFW",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "KOA",
		"airport2": "DEN",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "SAV",
		"airport2": "ORD",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "SJC",
		"cnt": "410"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "CWA",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "MEM",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "IAH",
		"cnt": "416"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "IAD",
		"cnt": "417"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "GFK",
		"cnt": "246"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "LGA",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "DEN",
		"cnt": "590"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "STL",
		"cnt": "244"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "SNA",
		"cnt": "578"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "DFW",
		"cnt": "278"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "PHX",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "LAS",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "SRQ",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "LGA",
		"cnt": "206"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "IND",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "MKG",
		"airport2": "ORD",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "VLD",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "LGA",
		"cnt": "360"
	},
	{
		"airline": "all",
		"airport1": "SBA",
		"airport2": "SFO",
		"cnt": "430"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "PIH",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "ROC",
		"airport2": "CLE",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "FAR",
		"airport2": "MSP",
		"cnt": "254"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "TPA",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "MSY",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "COS",
		"cnt": "55"
	},
	{
		"airline": "all",
		"airport1": "GJT",
		"airport2": "SLC",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "EWR",
		"cnt": "236"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "TPA",
		"cnt": "215"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "GRR",
		"cnt": "122"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "PWM",
		"cnt": "167"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "SNA",
		"cnt": "365"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "ICT",
		"cnt": "261"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "EWR",
		"cnt": "246"
	},
	{
		"airline": "all",
		"airport1": "DRO",
		"airport2": "DEN",
		"cnt": "412"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "CMH",
		"cnt": "206"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "DCA",
		"cnt": "144"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "GRK",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "MLU",
		"cnt": "23"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "BTR",
		"cnt": "438"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SJC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MDT",
		"cnt": "196"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "SAV",
		"cnt": "94"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "ORD",
		"cnt": "203"
	},
	{
		"airline": "all",
		"airport1": "PVD",
		"airport2": "DCA",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "IND",
		"cnt": "403"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "SMF",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PBI",
		"cnt": "174"
	},
	{
		"airline": "all",
		"airport1": "FSD",
		"airport2": "ORD",
		"cnt": "418"
	},
	{
		"airline": "all",
		"airport1": "KOA",
		"airport2": "SFO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "ORD",
		"cnt": "184"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MTJ",
		"cnt": "16"
	},
	{
		"airline": "all",
		"airport1": "MHK",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "OMA",
		"cnt": "63"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JNU",
		"airport2": "YAK",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "DEN",
		"cnt": "802"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "ABQ",
		"cnt": "354"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "IAD",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "ATL",
		"cnt": "584"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "ANC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "CLE",
		"cnt": "46"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "PHX",
		"cnt": "582"
	},
	{
		"airline": "all",
		"airport1": "CHS",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "MDW",
		"cnt": "311"
	},
	{
		"airline": "all",
		"airport1": "ROC",
		"airport2": "CLT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "HSV",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ISP",
		"airport2": "TPA",
		"cnt": "140"
	},
	{
		"airline": "all",
		"airport1": "AMA",
		"airport2": "DFW",
		"cnt": "179"
	},
	{
		"airline": "all",
		"airport1": "JAN",
		"airport2": "DCA",
		"cnt": "29"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "DTW",
		"cnt": "14"
	},
	{
		"airline": "all",
		"airport1": "PSG",
		"airport2": "JNU",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "MSP",
		"cnt": "128"
	},
	{
		"airline": "all",
		"airport1": "EVV",
		"airport2": "ORD",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "619"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "STL",
		"cnt": "255"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "TLH",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "IAH",
		"cnt": "310"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "DTW",
		"cnt": "711"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "IAD",
		"cnt": "124"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "IAH",
		"cnt": "266"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "PIT",
		"cnt": "213"
	},
	{
		"airline": "all",
		"airport1": "BIS",
		"airport2": "MSP",
		"cnt": "139"
	},
	{
		"airline": "all",
		"airport1": "RKS",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "AMA",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "DFW",
		"cnt": "251"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "MSP",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "DFW",
		"cnt": "1443"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "ONT",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "JAN",
		"airport2": "IAH",
		"cnt": "227"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "SAN",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SRQ",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "PHX",
		"cnt": "430"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MGM",
		"cnt": "154"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "RNO",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "SDF",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "ABQ",
		"cnt": "114"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "PBI",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CEC",
		"airport2": "SFO",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "TUS",
		"airport2": "PHX",
		"cnt": "576"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CHS",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "DAY",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "FAY",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "TYS",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "DEN",
		"cnt": "450"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MKE",
		"cnt": "46"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "DEN",
		"cnt": "420"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "TUS",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "TUL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "OAK",
		"cnt": "69"
	},
	{
		"airline": "all",
		"airport1": "BMI",
		"airport2": "MCO",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "KOA",
		"airport2": "ORD",
		"cnt": "6"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "IAD",
		"cnt": "74"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MTJ",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BTR",
		"airport2": "MEM",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "COD",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "FNT",
		"airport2": "RSW",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "PHX",
		"cnt": "176"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "TPA",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "DFW",
		"cnt": "390"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "SFO",
		"cnt": "162"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "DAY",
		"cnt": "45"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TXK",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "IAH",
		"cnt": "325"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CIC",
		"airport2": "SFO",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "MSP",
		"cnt": "286"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "LAS",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "SYR",
		"airport2": "PHL",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "CAE",
		"airport2": "ORD",
		"cnt": "148"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "DTW",
		"cnt": "219"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "HPN",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "ISP",
		"cnt": "292"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MBS",
		"airport2": "ORD",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "JFK",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "EWR",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "KTN",
		"airport2": "WRG",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MEM",
		"cnt": "154"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "RSW",
		"cnt": "42"
	},
	{
		"airline": "all",
		"airport1": "SHV",
		"airport2": "DFW",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "BDL",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "LIH",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "PDX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "JFK",
		"cnt": "113"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "PHL",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "FNT",
		"cnt": "34"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "OKC",
		"cnt": "109"
	},
	{
		"airline": "all",
		"airport1": "EGE",
		"airport2": "IAH",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "CMH",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "SNA",
		"airport2": "EWR",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MSY",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "LAS",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "JAN",
		"cnt": "440"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "MHT",
		"cnt": "159"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "COD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "TUS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SMF",
		"cnt": "522"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "ORD",
		"cnt": "462"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "JAX",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "HOU",
		"cnt": "157"
	},
	{
		"airline": "all",
		"airport1": "CDV",
		"airport2": "ANC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "CVG",
		"cnt": "42"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "TUS",
		"cnt": "209"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "TUS",
		"cnt": "534"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "RAP",
		"cnt": "322"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "TUL",
		"cnt": "372"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MSP",
		"cnt": "338"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "ORD",
		"cnt": "526"
	},
	{
		"airline": "all",
		"airport1": "GGG",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "VPS",
		"cnt": "134"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "IND",
		"cnt": "163"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "ORD",
		"cnt": "588"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "MAF",
		"cnt": "302"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "KOA",
		"airport2": "LAX",
		"cnt": "192"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "RNO",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "PVD",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MLI",
		"cnt": "69"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MDT",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "DSM",
		"airport2": "MSP",
		"cnt": "60"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PHX",
		"cnt": "176"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PVD",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "VPS",
		"airport2": "ATL",
		"cnt": "522"
	},
	{
		"airline": "all",
		"airport1": "GEG",
		"airport2": "PDX",
		"cnt": "149"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "IAD",
		"cnt": "199"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "DCA",
		"cnt": "602"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "ORD",
		"cnt": "414"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "SMF",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "IAH",
		"cnt": "378"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "CLE",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "MCO",
		"cnt": "586"
	},
	{
		"airline": "all",
		"airport1": "TVC",
		"airport2": "ORD",
		"cnt": "257"
	},
	{
		"airline": "all",
		"airport1": "TRI",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "DFW",
		"cnt": "326"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "IAD",
		"cnt": "98"
	},
	{
		"airline": "all",
		"airport1": "LNK",
		"airport2": "ORD",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "SAV",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SMF",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "BWI",
		"cnt": "288"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "JAC",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "STT",
		"airport2": "JFK",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "PDX",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "STL",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "ATL",
		"cnt": "794"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "FWA",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "GRR",
		"cnt": "42"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SAT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "BWI",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "GUC",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "SDF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "CLE",
		"cnt": "42"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "SWF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "SLC",
		"cnt": "132"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "LWS",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "RDU",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "DLH",
		"cnt": "58"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "LAS",
		"cnt": "555"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "JFK",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "JFK",
		"cnt": "347"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "LAX",
		"cnt": "1050"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "JFK",
		"cnt": "55"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "SMF",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "SLC",
		"cnt": "122"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "GSP",
		"airport2": "ORD",
		"cnt": "78"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "BNA",
		"cnt": "255"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "MCO",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "TPA",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "PHX",
		"cnt": "595"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "PVD",
		"cnt": "155"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "DFW",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "ELP",
		"cnt": "364"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "PSP",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "ATL",
		"cnt": "266"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "CLT",
		"cnt": "442"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "BOS",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "EVV",
		"airport2": "MEM",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "SAT",
		"cnt": "382"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "CVG",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "PVD",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "SLC",
		"cnt": "409"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "MAF",
		"cnt": "310"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "ORD",
		"cnt": "189"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "PHL",
		"cnt": "308"
	},
	{
		"airline": "all",
		"airport1": "PAH",
		"airport2": "LIT",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CYS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SGF",
		"cnt": "147"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "ORD",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "PDX",
		"cnt": "424"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BKG",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "CAK",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "ATL",
		"cnt": "826"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "GRR",
		"cnt": "88"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "DFW",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "HNL",
		"cnt": "1720"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "CLT",
		"cnt": "354"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "PHX",
		"cnt": "393"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "SNA",
		"cnt": "371"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "BOS",
		"cnt": "938"
	},
	{
		"airline": "all",
		"airport1": "STT",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORF",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "GRB",
		"airport2": "MQT",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "OKC",
		"cnt": "256"
	},
	{
		"airline": "all",
		"airport1": "SNA",
		"airport2": "ATL",
		"cnt": "258"
	},
	{
		"airline": "all",
		"airport1": "STT",
		"airport2": "SJU",
		"cnt": "25"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "RDU",
		"cnt": "153"
	},
	{
		"airline": "all",
		"airport1": "MSO",
		"airport2": "DEN",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "COS",
		"cnt": "278"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "MDW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "BOS",
		"cnt": "191"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "SAF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "ELP",
		"cnt": "198"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "SLC",
		"cnt": "494"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "MCO",
		"cnt": "456"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "DFW",
		"cnt": "325"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "STL",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "DTW",
		"cnt": "359"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "DFW",
		"cnt": "820"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "OAK",
		"cnt": "680"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "SJC",
		"cnt": "381"
	},
	{
		"airline": "all",
		"airport1": "GEG",
		"airport2": "SLC",
		"cnt": "356"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "MSP",
		"cnt": "384"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "MSY",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "DEN",
		"cnt": "223"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "MDW",
		"cnt": "265"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "DEN",
		"cnt": "405"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "CLT",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "MYR",
		"airport2": "EWR",
		"cnt": "40"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "RIC",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "GRR",
		"cnt": "157"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "SBN",
		"cnt": "316"
	},
	{
		"airline": "all",
		"airport1": "GJT",
		"airport2": "DFW",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "LEX",
		"airport2": "IAH",
		"cnt": "92"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MHT",
		"cnt": "54"
	},
	{
		"airline": "all",
		"airport1": "KOA",
		"airport2": "OGG",
		"cnt": "118"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "CLT",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "EWR",
		"cnt": "374"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "GSO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CID",
		"airport2": "DEN",
		"cnt": "94"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "PIT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "EWR",
		"cnt": "27"
	},
	{
		"airline": "all",
		"airport1": "FCA",
		"airport2": "SLC",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "SAV",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "WRG",
		"airport2": "PSG",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MDW",
		"cnt": "267"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "GEG",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "ATL",
		"cnt": "582"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "JAX",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "MEM",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "GPT",
		"cnt": "278"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "ABQ",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "BNA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "SDF",
		"cnt": "144"
	},
	{
		"airline": "all",
		"airport1": "ABE",
		"airport2": "FLL",
		"cnt": "26"
	},
	{
		"airline": "all",
		"airport1": "LSE",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "LAX",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "ISP",
		"airport2": "MDW",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "STL",
		"cnt": "200"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "GTF",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "CAK",
		"airport2": "RSW",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "BTV",
		"cnt": "40"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "PWM",
		"cnt": "143"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "CAE",
		"cnt": "94"
	},
	{
		"airline": "all",
		"airport1": "DAY",
		"airport2": "MSP",
		"cnt": "60"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "LAX",
		"cnt": "275"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "GRK",
		"cnt": "234"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "SJU",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "OAK",
		"cnt": "739"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "CLT",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "CLE",
		"cnt": "247"
	},
	{
		"airline": "all",
		"airport1": "RDM",
		"airport2": "SFO",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MRY",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "SFO",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "MSY",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "JFK",
		"cnt": "1026"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "IAH",
		"cnt": "115"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "IND",
		"cnt": "221"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "MKE",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "DTW",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "IAD",
		"cnt": "146"
	},
	{
		"airline": "all",
		"airport1": "MRY",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "SBA",
		"cnt": "254"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "KOA",
		"airport2": "HNL",
		"cnt": "1268"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "DAL",
		"cnt": "610"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SEA",
		"cnt": "610"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "SRQ",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "OKC",
		"cnt": "106"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "EWR",
		"cnt": "603"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MSN",
		"cnt": "186"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MSP",
		"cnt": "900"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MKE",
		"cnt": "60"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MSY",
		"cnt": "311"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "CLE",
		"cnt": "412"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MAF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "SAN",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SLC",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "SPS",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ATW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SAV",
		"airport2": "IAD",
		"cnt": "132"
	},
	{
		"airline": "all",
		"airport1": "JNU",
		"airport2": "SIT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "BHM",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MHT",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "LAS",
		"cnt": "1377"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "STL",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "STT",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "STX",
		"cnt": "10"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "RDU",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "ELP",
		"cnt": "586"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "STL",
		"cnt": "576"
	},
	{
		"airline": "all",
		"airport1": "MSN",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "SAT",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "CLT",
		"cnt": "460"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "SAN",
		"cnt": "270"
	},
	{
		"airline": "all",
		"airport1": "JAN",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AEX",
		"airport2": "ATL",
		"cnt": "260"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "TWF",
		"cnt": "225"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "SFO",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "TPA",
		"cnt": "482"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "EGE",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "SMF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "AVP",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "GSO",
		"airport2": "IAD",
		"cnt": "126"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "ORD",
		"cnt": "1051"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BZN",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "TUL",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "TUS",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "HOU",
		"cnt": "256"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MCI",
		"cnt": "215"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "JAX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "PHL",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "MSP",
		"cnt": "277"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "ABQ",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "DAY",
		"cnt": "140"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "DTW",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "SJC",
		"cnt": "34"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "RSW",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "CVG",
		"cnt": "130"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "EGE",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "MSN",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "HOU",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "LEX",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PSP",
		"cnt": "88"
	},
	{
		"airline": "all",
		"airport1": "BZN",
		"airport2": "MSP",
		"cnt": "58"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "LGA",
		"cnt": "154"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "ORD",
		"cnt": "717"
	},
	{
		"airline": "all",
		"airport1": "PVD",
		"airport2": "PHL",
		"cnt": "395"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "FLL",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MCI",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "MCO",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "JAX",
		"cnt": "318"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "MSY",
		"cnt": "147"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "JAN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "MCO",
		"cnt": "314"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "TPA",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "ATL",
		"cnt": "1224"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "TPA",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "ORF",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "FAR",
		"cnt": "215"
	},
	{
		"airline": "all",
		"airport1": "EUG",
		"airport2": "PDX",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "ECP",
		"airport2": "ATL",
		"cnt": "438"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "STT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "BWI",
		"cnt": "90"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "GEG",
		"cnt": "307"
	},
	{
		"airline": "all",
		"airport1": "CHS",
		"airport2": "CLT",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "FAI",
		"airport2": "SCC",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "STX",
		"cnt": "62"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "EYW",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "STL",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ROC",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "IND",
		"cnt": "323"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ROA",
		"cnt": "214"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "SEA",
		"cnt": "55"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "ATL",
		"cnt": "372"
	},
	{
		"airline": "all",
		"airport1": "GEG",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "JFK",
		"cnt": "916"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "XNA",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "SAF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "EGE",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "BTV",
		"cnt": "184"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MIA",
		"cnt": "584"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "DEN",
		"cnt": "330"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "DAY",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "RIC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "LBB",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "FLL",
		"cnt": "360"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "SDF",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "ATL",
		"cnt": "793"
	},
	{
		"airline": "all",
		"airport1": "SGF",
		"airport2": "DFW",
		"cnt": "434"
	},
	{
		"airline": "all",
		"airport1": "ELP",
		"airport2": "HOU",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "ROC",
		"airport2": "TPA",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MEM",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "RDU",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "EWR",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "PHL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "ELP",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ONT",
		"airport2": "SMF",
		"cnt": "415"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "CSG",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "PHX",
		"cnt": "966"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MGM",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "GSP",
		"cnt": "17"
	},
	{
		"airline": "all",
		"airport1": "HPN",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "STL",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "TPA",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MLB",
		"airport2": "ATL",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MSN",
		"cnt": "67"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "PDX",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "JAN",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "GRB",
		"cnt": "90"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MSY",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "ORD",
		"cnt": "228"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "JAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JAN",
		"airport2": "DTW",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "SNA",
		"cnt": "326"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "PHL",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "DTW",
		"cnt": "75"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "DEN",
		"cnt": "326"
	},
	{
		"airline": "all",
		"airport1": "MHT",
		"airport2": "EWR",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SEA",
		"cnt": "321"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "PHL",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "OTZ",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "CLT",
		"cnt": "466"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "BOS",
		"cnt": "228"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "SEA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "MSP",
		"cnt": "338"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "SLC",
		"cnt": "438"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "JFK",
		"cnt": "664"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "MCO",
		"cnt": "194"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "TPA",
		"cnt": "181"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "BHM",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MLU",
		"airport2": "MEM",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "LAX",
		"cnt": "488"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "JFK",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "HPN",
		"airport2": "MCO",
		"cnt": "260"
	},
	{
		"airline": "all",
		"airport1": "MSN",
		"airport2": "MSP",
		"cnt": "148"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "MEM",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "RSW",
		"cnt": "213"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "RST",
		"cnt": "37"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "DFW",
		"cnt": "826"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "HNL",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MOT",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SFO",
		"cnt": "966"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "CAE",
		"cnt": "578"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "IAH",
		"cnt": "318"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SYR",
		"cnt": "189"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "EWR",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "OAK",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BMI",
		"cnt": "370"
	},
	{
		"airline": "all",
		"airport1": "JNU",
		"airport2": "KTN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CAK",
		"airport2": "LGA",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "MLI",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SJC",
		"cnt": "404"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "MCO",
		"cnt": "270"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "MCI",
		"cnt": "159"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "IAH",
		"cnt": "295"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "IND",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "SEA",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MCO",
		"cnt": "1393"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "TPA",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MCI",
		"cnt": "560"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "OKC",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "EGE",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "MSP",
		"cnt": "261"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "MDW",
		"cnt": "320"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "LGB",
		"cnt": "35"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "BUF",
		"cnt": "72"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "RDM",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "OMA",
		"cnt": "454"
	},
	{
		"airline": "all",
		"airport1": "CHS",
		"airport2": "ATL",
		"cnt": "380"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "OKC",
		"cnt": "206"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "EWR",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "OAK",
		"cnt": "511"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "CLT",
		"cnt": "321"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "MCO",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "ONT",
		"airport2": "SLC",
		"cnt": "238"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "SJU",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "TYS",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MDW",
		"cnt": "315"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "IYK",
		"cnt": "146"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "CAK",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "MDW",
		"cnt": "311"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "LBB",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PSP",
		"airport2": "SFO",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "SMF",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ONT",
		"airport2": "DEN",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "JAC",
		"cnt": "172"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "OAJ",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "LIT",
		"cnt": "316"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "LAX",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "GSO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "LFT",
		"cnt": "382"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "MDW",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "RIC",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MIA",
		"cnt": "593"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "CLT",
		"cnt": "821"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "DFW",
		"cnt": "838"
	},
	{
		"airline": "all",
		"airport1": "LEX",
		"airport2": "MCO",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "ICT",
		"airport2": "MEM",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "HNL",
		"cnt": "136"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "SJU",
		"cnt": "135"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ACY",
		"airport2": "ATL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "LAX",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "PHL",
		"cnt": "256"
	},
	{
		"airline": "all",
		"airport1": "ABE",
		"airport2": "MCO",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "LAX",
		"cnt": "732"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "IND",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "BUF",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "ELP",
		"cnt": "434"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "ANC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "MSP",
		"cnt": "458"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "LAX",
		"cnt": "1700"
	},
	{
		"airline": "all",
		"airport1": "CHA",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "CVG",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "PDX",
		"cnt": "312"
	},
	{
		"airline": "all",
		"airport1": "BFL",
		"airport2": "LAX",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "DAY",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "SEA",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "BTV",
		"airport2": "IAD",
		"cnt": "138"
	},
	{
		"airline": "all",
		"airport1": "CWA",
		"airport2": "EAU",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "HDN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "BUF",
		"cnt": "460"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "IAD",
		"cnt": "126"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "MEM",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "PHX",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "SAT",
		"cnt": "257"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "LAS",
		"cnt": "316"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "LGB",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "LGA",
		"cnt": "610"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "XNA",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "PNS",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "DTW",
		"cnt": "263"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "OAK",
		"cnt": "309"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "GUC",
		"cnt": "42"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "JFK",
		"cnt": "368"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "GRB",
		"cnt": "27"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "PBI",
		"cnt": "206"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "MSY",
		"cnt": "369"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "YUM",
		"cnt": "268"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "ISP",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "SJC",
		"cnt": "479"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "MDW",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "JNU",
		"airport2": "ANC",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ABQ",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "SCC",
		"cnt": "40"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MCO",
		"cnt": "503"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "ORD",
		"cnt": "1055"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MSY",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "CMI",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SLC",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "DCA",
		"cnt": "408"
	},
	{
		"airline": "all",
		"airport1": "SDF",
		"airport2": "STL",
		"cnt": "97"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CLT",
		"cnt": "786"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "JFK",
		"cnt": "663"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "DFW",
		"cnt": "578"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "CVG",
		"cnt": "162"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "HDN",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "FNT",
		"cnt": "345"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "1039"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "MTJ",
		"cnt": "60"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "EGE",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "SFO",
		"cnt": "880"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "PHX",
		"cnt": "352"
	},
	{
		"airline": "all",
		"airport1": "CHS",
		"airport2": "IAD",
		"cnt": "180"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "RSW",
		"cnt": "172"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "BNA",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "LAS",
		"cnt": "263"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "IAH",
		"cnt": "258"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "EUG",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "ASE",
		"airport2": "IAH",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "PHL",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "RDU",
		"cnt": "371"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "BIS",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "MAF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "LGA",
		"cnt": "206"
	},
	{
		"airline": "all",
		"airport1": "PNS",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "LGA",
		"cnt": "545"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "STL",
		"cnt": "203"
	},
	{
		"airline": "all",
		"airport1": "SBP",
		"airport2": "LAX",
		"cnt": "326"
	},
	{
		"airline": "all",
		"airport1": "GSP",
		"airport2": "DFW",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MLI",
		"cnt": "222"
	},
	{
		"airline": "all",
		"airport1": "SBA",
		"airport2": "LAX",
		"cnt": "706"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MLU",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "PSP",
		"airport2": "SEA",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "STL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "FLL",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "MSP",
		"cnt": "676"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "PHL",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "BIL",
		"airport2": "DEN",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "DAY",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MHT",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "RSW",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "TUL",
		"cnt": "446"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "OAK",
		"cnt": "106"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "TUS",
		"cnt": "419"
	},
	{
		"airline": "all",
		"airport1": "SDF",
		"airport2": "MSP",
		"cnt": "76"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "CVG",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "SLC",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TUL",
		"airport2": "ORD",
		"cnt": "434"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "MEM",
		"cnt": "63"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "SLC",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BNA",
		"cnt": "386"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "BOS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "JFK",
		"cnt": "228"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "OGG",
		"cnt": "16"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "MSP",
		"cnt": "325"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "PBI",
		"cnt": "408"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "PVD",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "MSY",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "ORD",
		"cnt": "443"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "SAN",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "SAN",
		"cnt": "109"
	},
	{
		"airline": "all",
		"airport1": "FWA",
		"airport2": "CVG",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "MDW",
		"cnt": "159"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "FCA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AVL",
		"airport2": "EWR",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "LAX",
		"cnt": "759"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "ORD",
		"cnt": "1618"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "LAS",
		"cnt": "789"
	},
	{
		"airline": "all",
		"airport1": "SNA",
		"airport2": "PHX",
		"cnt": "808"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "IAH",
		"cnt": "250"
	},
	{
		"airline": "all",
		"airport1": "XNA",
		"airport2": "IAH",
		"cnt": "170"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "SMF",
		"cnt": "314"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "ECP",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "PIA",
		"airport2": "DEN",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "TUL",
		"airport2": "LAX",
		"cnt": "35"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "RSW",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "MDW",
		"cnt": "312"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "MOT",
		"cnt": "202"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "MSP",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "OGG",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "PNS",
		"cnt": "69"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "IND",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "DFW",
		"cnt": "544"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "LGA",
		"cnt": "770"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "DEN",
		"cnt": "358"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "BDL",
		"cnt": "382"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "HNL",
		"cnt": "784"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "IAD",
		"cnt": "453"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "DEN",
		"cnt": "285"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "SFO",
		"cnt": "374"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "MCI",
		"cnt": "130"
	},
	{
		"airline": "all",
		"airport1": "LAN",
		"airport2": "ORD",
		"cnt": "195"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "PIT",
		"cnt": "128"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "FWA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LEX",
		"airport2": "DTW",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "IAH",
		"cnt": "306"
	},
	{
		"airline": "all",
		"airport1": "FAI",
		"airport2": "ANC",
		"cnt": "410"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "SDF",
		"cnt": "177"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SIT",
		"airport2": "KTN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "RAP",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "SJU",
		"cnt": "12"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "HSV",
		"cnt": "522"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "FLL",
		"cnt": "125"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "IAH",
		"cnt": "159"
	},
	{
		"airline": "all",
		"airport1": "GJT",
		"airport2": "PHX",
		"cnt": "144"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "TUL",
		"cnt": "256"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MAF",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "CVG",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "LAX",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "JAX",
		"cnt": "183"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CAK",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "PHX",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "LEX",
		"airport2": "ORD",
		"cnt": "322"
	},
	{
		"airline": "all",
		"airport1": "ISP",
		"airport2": "MCO",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "PHX",
		"cnt": "363"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "LNK",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "ATL",
		"cnt": "113"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "ATL",
		"cnt": "676"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "BOS",
		"cnt": "1732"
	},
	{
		"airline": "all",
		"airport1": "BFL",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MSY",
		"cnt": "800"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "PIT",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "CLE",
		"cnt": "54"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "DFW",
		"cnt": "294"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "PIE",
		"cnt": "52"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "ATL",
		"cnt": "838"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SYR",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "FAY",
		"cnt": "50"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "MCI",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "TEX",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "RAP",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "CLT",
		"cnt": "355"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "MEM",
		"cnt": "185"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "SAT",
		"cnt": "556"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "SAT",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "SHV",
		"cnt": "154"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "MDW",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "CLE",
		"cnt": "105"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "RSW",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "TPA",
		"cnt": "214"
	},
	{
		"airline": "all",
		"airport1": "ROW",
		"airport2": "DFW",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "ROC",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "GRR",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "HLN",
		"airport2": "MSP",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "GPT",
		"airport2": "IAH",
		"cnt": "254"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "SJU",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "BNA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "MSY",
		"cnt": "34"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "PDX",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "SLC",
		"cnt": "57"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "RNO",
		"cnt": "308"
	},
	{
		"airline": "all",
		"airport1": "EGE",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "SRQ",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "HSV",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "LFT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "TPA",
		"cnt": "155"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "RSW",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "RSW",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "LAS",
		"cnt": "88"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "PHL",
		"cnt": "98"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CAE",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "MCO",
		"cnt": "219"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "DCA",
		"cnt": "1567"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "PHX",
		"cnt": "975"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "JFK",
		"cnt": "57"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "PWM",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BTV",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "CLE",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SJC",
		"cnt": "432"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "SFO",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SYR",
		"cnt": "123"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "EWR",
		"cnt": "65"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CSG",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "ABE",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "GEG",
		"airport2": "MSP",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "TYR",
		"cnt": "110"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "LAX",
		"cnt": "200"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "XNA",
		"cnt": "230"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "RIC",
		"cnt": "134"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "SPI",
		"cnt": "258"
	},
	{
		"airline": "all",
		"airport1": "FNT",
		"airport2": "TPA",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "TUL",
		"cnt": "109"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "ATL",
		"cnt": "1615"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "MCO",
		"cnt": "372"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "STL",
		"cnt": "352"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "OKC",
		"cnt": "409"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "EWR",
		"cnt": "348"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PSE",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "UTM",
		"cnt": "32"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "DEN",
		"cnt": "672"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "PBI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "DFW",
		"cnt": "346"
	},
	{
		"airline": "all",
		"airport1": "ONT",
		"airport2": "PHX",
		"cnt": "702"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "ORD",
		"cnt": "877"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "RDU",
		"cnt": "382"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "BUR",
		"cnt": "280"
	},
	{
		"airline": "all",
		"airport1": "PSE",
		"airport2": "JFK",
		"cnt": "46"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "SMF",
		"cnt": "586"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "DFW",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "FAI",
		"airport2": "BRW",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "TUL",
		"cnt": "102"
	},
	{
		"airline": "all",
		"airport1": "ANC",
		"airport2": "BET",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MOB",
		"cnt": "440"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "SFO",
		"cnt": "838"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "DEN",
		"cnt": "1218"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "ORD",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "BQN",
		"cnt": "54"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "EWR",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "PHL",
		"cnt": "406"
	},
	{
		"airline": "all",
		"airport1": "SHV",
		"airport2": "IAH",
		"cnt": "124"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "PHF",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "PHX",
		"cnt": "1381"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "GEG",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "TPA",
		"cnt": "442"
	},
	{
		"airline": "all",
		"airport1": "SNA",
		"airport2": "MSP",
		"cnt": "146"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "MSP",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "ORF",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "MCI",
		"cnt": "521"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "IAD",
		"cnt": "140"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "ORD",
		"cnt": "69"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "IAH",
		"cnt": "352"
	},
	{
		"airline": "all",
		"airport1": "BZN",
		"airport2": "ORD",
		"cnt": "83"
	},
	{
		"airline": "all",
		"airport1": "BPT",
		"airport2": "IAH",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "BZN",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SLC",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "SEA",
		"cnt": "710"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "SFO",
		"cnt": "328"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "LGA",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "AVL",
		"airport2": "IAH",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "PHX",
		"cnt": "577"
	},
	{
		"airline": "all",
		"airport1": "GTF",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "ATL",
		"cnt": "310"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "ATL",
		"cnt": "364"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SNA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "IAH",
		"cnt": "696"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "LAX",
		"cnt": "1383"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "KOA",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "GJT",
		"cnt": "341"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "LAS",
		"cnt": "1221"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "SNA",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "DEN",
		"cnt": "354"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "SFO",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "SJC",
		"cnt": "157"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "PVD",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "BWI",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "LEX",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "ATL",
		"cnt": "556"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "GPT",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "ORD",
		"cnt": "229"
	},
	{
		"airline": "all",
		"airport1": "FAR",
		"airport2": "ORD",
		"cnt": "357"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "BOS",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "MTJ",
		"cnt": "14"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "SFO",
		"cnt": "372"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "ABQ",
		"cnt": "744"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "LFT",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MOB",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "GRR",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "HPN",
		"cnt": "324"
	},
	{
		"airline": "all",
		"airport1": "SAN",
		"airport2": "EWR",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "FLL",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ONT",
		"airport2": "SJC",
		"cnt": "261"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "MEM",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "TPA",
		"cnt": "136"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "ABI",
		"cnt": "382"
	},
	{
		"airline": "all",
		"airport1": "RIC",
		"airport2": "DFW",
		"cnt": "166"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "DAY",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "MCI",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "PVD",
		"cnt": "92"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "MCO",
		"cnt": "673"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "DHN",
		"cnt": "214"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MRY",
		"airport2": "PHX",
		"cnt": "116"
	},
	{
		"airline": "all",
		"airport1": "PBI",
		"airport2": "DCA",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "SYR",
		"cnt": "193"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "DFW",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "CRP",
		"cnt": "434"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "RDU",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "LRD",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "ATL",
		"cnt": "46"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "DTW",
		"cnt": "301"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "ABQ",
		"cnt": "444"
	},
	{
		"airline": "all",
		"airport1": "SYR",
		"airport2": "CLT",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "BMI",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "HOU",
		"cnt": "205"
	},
	{
		"airline": "all",
		"airport1": "BMI",
		"airport2": "RSW",
		"cnt": "14"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "LAS",
		"cnt": "548"
	},
	{
		"airline": "all",
		"airport1": "HSV",
		"airport2": "DEN",
		"cnt": "90"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "STT",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "LAX",
		"cnt": "1395"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "GRB",
		"cnt": "488"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "MFR",
		"cnt": "300"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "OGG",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "PNS",
		"cnt": "72"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "DEN",
		"cnt": "62"
	},
	{
		"airline": "all",
		"airport1": "COS",
		"airport2": "SLC",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "HSV",
		"airport2": "IAD",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "TYS",
		"cnt": "384"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "TPA",
		"cnt": "92"
	},
	{
		"airline": "all",
		"airport1": "CHA",
		"airport2": "ATL",
		"cnt": "518"
	},
	{
		"airline": "all",
		"airport1": "DAL",
		"airport2": "STL",
		"cnt": "413"
	},
	{
		"airline": "all",
		"airport1": "ICT",
		"airport2": "IAH",
		"cnt": "234"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "MDW",
		"cnt": "488"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "PVD",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MCO",
		"cnt": "275"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "SRQ",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MCI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ONT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "GUM",
		"airport2": "SPN",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "PWM",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "SEA",
		"cnt": "633"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "LAS",
		"cnt": "368"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "SMF",
		"cnt": "405"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "ATL",
		"cnt": "436"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "IDA",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "PIT",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "MIA",
		"cnt": "360"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "HSV",
		"cnt": "142"
	},
	{
		"airline": "all",
		"airport1": "ADQ",
		"airport2": "ANC",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "AMA",
		"airport2": "IAH",
		"cnt": "198"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "MAF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "SEA",
		"cnt": "534"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "LBB",
		"cnt": "94"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "SEA",
		"cnt": "36"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "MSY",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "PSC",
		"airport2": "SLC",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "HPN",
		"cnt": "172"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "PBI",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "ATL",
		"cnt": "722"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "TPA",
		"cnt": "426"
	},
	{
		"airline": "all",
		"airport1": "DAB",
		"airport2": "CLT",
		"cnt": "98"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "EWR",
		"cnt": "169"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "ATL",
		"cnt": "769"
	},
	{
		"airline": "all",
		"airport1": "CAK",
		"airport2": "ATL",
		"cnt": "529"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "ONT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "PVD",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "OAK",
		"cnt": "439"
	},
	{
		"airline": "all",
		"airport1": "LCH",
		"airport2": "IAH",
		"cnt": "54"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "DTW",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SGF",
		"cnt": "69"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "BWI",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "DFW",
		"cnt": "436"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "SAN",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MTJ",
		"cnt": "72"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "CLT",
		"cnt": "619"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "JNU",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "LAS",
		"cnt": "652"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "PHX",
		"cnt": "170"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "JAX",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "SYR",
		"cnt": "22"
	},
	{
		"airline": "all",
		"airport1": "MQT",
		"airport2": "TVC",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "CRP",
		"airport2": "HOU",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "PHX",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "PBI",
		"cnt": "336"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "CLT",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "RSW",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "BTM",
		"airport2": "SLC",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "DFW",
		"cnt": "544"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "ORD",
		"cnt": "450"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "BHM",
		"cnt": "302"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "CLE",
		"cnt": "39"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "ATL",
		"cnt": "440"
	},
	{
		"airline": "all",
		"airport1": "FAT",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "DEN",
		"cnt": "176"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "FLL",
		"cnt": "420"
	},
	{
		"airline": "all",
		"airport1": "TPA",
		"airport2": "CVG",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "RKS",
		"airport2": "SLC",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "SEA",
		"airport2": "HNL",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "SNA",
		"airport2": "DEN",
		"cnt": "637"
	},
	{
		"airline": "all",
		"airport1": "MYR",
		"airport2": "CLT",
		"cnt": "204"
	},
	{
		"airline": "all",
		"airport1": "GJT",
		"airport2": "LAX",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "MEM",
		"cnt": "146"
	},
	{
		"airline": "all",
		"airport1": "MHT",
		"airport2": "PHL",
		"cnt": "251"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MHT",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "IND",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "RAP",
		"cnt": "184"
	},
	{
		"airline": "all",
		"airport1": "LGA",
		"airport2": "PBI",
		"cnt": "320"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "CLE",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MCO",
		"cnt": "548"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MCI",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "EWR",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "EGE",
		"airport2": "DFW",
		"cnt": "136"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "CLT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "SEA",
		"cnt": "547"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "PHX",
		"cnt": "205"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "DFW",
		"cnt": "318"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "PSC",
		"airport2": "DEN",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "MHT",
		"airport2": "TPA",
		"cnt": "113"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "ANC",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SMF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "EWN",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "EWR",
		"cnt": "824"
	},
	{
		"airline": "all",
		"airport1": "ICT",
		"airport2": "ORD",
		"cnt": "410"
	},
	{
		"airline": "all",
		"airport1": "SJC",
		"airport2": "MSP",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "GSO",
		"airport2": "ATL",
		"cnt": "300"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "PIT",
		"cnt": "88"
	},
	{
		"airline": "all",
		"airport1": "CRW",
		"airport2": "ORD",
		"cnt": "206"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "RSW",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "ATL",
		"cnt": "585"
	},
	{
		"airline": "all",
		"airport1": "IPL",
		"airport2": "LAX",
		"cnt": "77"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "OAK",
		"airport2": "RNO",
		"cnt": "157"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "BNA",
		"cnt": "253"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "CID",
		"cnt": "313"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "MCO",
		"cnt": "446"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "JFK",
		"cnt": "307"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "CHS",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "PWM",
		"cnt": "81"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "DTW",
		"cnt": "466"
	},
	{
		"airline": "all",
		"airport1": "FAT",
		"airport2": "PHX",
		"cnt": "232"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "PIT",
		"cnt": "6"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "MIA",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "EWR",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "SFO",
		"cnt": "316"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "DTW",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "SFO",
		"cnt": "518"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "AUS",
		"cnt": "73"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "TLH",
		"cnt": "500"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "SAN",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "RSW",
		"cnt": "70"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "GPT",
		"cnt": "136"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "ATL",
		"cnt": "478"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BQK",
		"cnt": "140"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "DFW",
		"cnt": "1025"
	},
	{
		"airline": "all",
		"airport1": "ADK",
		"airport2": "ANC",
		"cnt": "16"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "HDN",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "MAF",
		"cnt": "99"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "JFK",
		"cnt": "179"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SFO",
		"cnt": "839"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "LAS",
		"cnt": "711"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "MDW",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "RSW",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "PHX",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "ORF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "OAK",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "ORD",
		"cnt": "550"
	},
	{
		"airline": "all",
		"airport1": "MSY",
		"airport2": "TPA",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "AEX",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "SAN",
		"cnt": "111"
	},
	{
		"airline": "all",
		"airport1": "CAE",
		"airport2": "IAD",
		"cnt": "188"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "LAX",
		"cnt": "116"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "LIT",
		"cnt": "381"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "XNA",
		"cnt": "482"
	},
	{
		"airline": "all",
		"airport1": "GEG",
		"airport2": "OAK",
		"cnt": "107"
	},
	{
		"airline": "all",
		"airport1": "CHA",
		"airport2": "DTW",
		"cnt": "23"
	},
	{
		"airline": "all",
		"airport1": "SAV",
		"airport2": "ATL",
		"cnt": "512"
	},
	{
		"airline": "all",
		"airport1": "MSO",
		"airport2": "SLC",
		"cnt": "238"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "PIT",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "PIT",
		"airport2": "ORD",
		"cnt": "491"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "DEN",
		"cnt": "246"
	},
	{
		"airline": "all",
		"airport1": "HRL",
		"airport2": "IAH",
		"cnt": "258"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "DAY",
		"cnt": "174"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "MSP",
		"cnt": "62"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "DFW",
		"cnt": "560"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "HRL",
		"airport2": "SAT",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "EWR",
		"airport2": "JAX",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "OTZ",
		"airport2": "OME",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "CPR",
		"cnt": "208"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "EWR",
		"cnt": "178"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "RDU",
		"cnt": "22"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "SAT",
		"cnt": "103"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MIA",
		"cnt": "944"
	},
	{
		"airline": "all",
		"airport1": "MIA",
		"airport2": "DTW",
		"cnt": "274"
	},
	{
		"airline": "all",
		"airport1": "SGF",
		"airport2": "MEM",
		"cnt": "58"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "LMT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCO",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "MKE",
		"cnt": "317"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "OMA",
		"cnt": "210"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MDW",
		"cnt": "224"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "DCA",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "BUR",
		"airport2": "SLC",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "ATL",
		"cnt": "1043"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "PDX",
		"cnt": "632"
	},
	{
		"airline": "all",
		"airport1": "SJU",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "OKC",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "ATL",
		"cnt": "579"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "OMA",
		"cnt": "86"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "MSY",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "TPA",
		"cnt": "266"
	},
	{
		"airline": "all",
		"airport1": "STX",
		"airport2": "CLT",
		"cnt": "8"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "OKC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "PSP",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "CLE",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "MDW",
		"airport2": "SRQ",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "IND",
		"airport2": "LGA",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "RDU",
		"airport2": "TPA",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "MSN",
		"airport2": "CLE",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "EVV",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "ORF",
		"airport2": "EWR",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "HPN",
		"airport2": "RSW",
		"cnt": "101"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "PIT",
		"cnt": "128"
	},
	{
		"airline": "all",
		"airport1": "ECP",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "JAX",
		"airport2": "DTW",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PHL",
		"airport2": "RDU",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "ICT",
		"cnt": "276"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "PHF",
		"cnt": "435"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "FLL",
		"cnt": "44"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "RNO",
		"cnt": "322"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "OGG",
		"cnt": "6"
	},
	{
		"airline": "all",
		"airport1": "LIH",
		"airport2": "OGG",
		"cnt": "28"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "IAH",
		"cnt": "278"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "TPA",
		"cnt": "260"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "MFE",
		"cnt": "248"
	},
	{
		"airline": "all",
		"airport1": "TUS",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "LIT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "JAN",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "KTN",
		"airport2": "SEA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "TUL",
		"cnt": "193"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "ONT",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MLI",
		"airport2": "ORD",
		"cnt": "161"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "PHX",
		"cnt": "598"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "OAK",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "OTH",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "OMA",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "PNS",
		"cnt": "226"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "IAH",
		"cnt": "242"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "BWI",
		"cnt": "382"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "CVG",
		"cnt": "376"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SJC",
		"cnt": "40"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "TUL",
		"cnt": "67"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "ORF",
		"cnt": "204"
	},
	{
		"airline": "all",
		"airport1": "STL",
		"airport2": "CVG",
		"cnt": "26"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "CLT",
		"cnt": "158"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "CDC",
		"cnt": "96"
	},
	{
		"airline": "all",
		"airport1": "OKC",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "SJU",
		"cnt": "538"
	},
	{
		"airline": "all",
		"airport1": "FAY",
		"airport2": "ATL",
		"cnt": "482"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "ORF",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MSY",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "GSO",
		"airport2": "EWR",
		"cnt": "203"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "MDW",
		"cnt": "109"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "SMF",
		"cnt": "430"
	},
	{
		"airline": "all",
		"airport1": "MEM",
		"airport2": "MSP",
		"cnt": "222"
	},
	{
		"airline": "all",
		"airport1": "GCC",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AVL",
		"airport2": "MCO",
		"cnt": "24"
	},
	{
		"airline": "all",
		"airport1": "ALB",
		"airport2": "BWI",
		"cnt": "251"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "OKC",
		"cnt": "360"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "LGB",
		"cnt": "209"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "MRY",
		"cnt": "330"
	},
	{
		"airline": "all",
		"airport1": "SUN",
		"airport2": "SLC",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "SFO",
		"cnt": "1991"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SHV",
		"cnt": "256"
	},
	{
		"airline": "all",
		"airport1": "SAT",
		"airport2": "JFK",
		"cnt": "1"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "OTH",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "GRB",
		"airport2": "DFW",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "MFR",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "DCA",
		"cnt": "30"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "LAS",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MLI",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "RDM",
		"cnt": "164"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "PHL",
		"cnt": "76"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MLU",
		"cnt": "18"
	},
	{
		"airline": "all",
		"airport1": "PBI",
		"airport2": "TPA",
		"cnt": "201"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "PSC",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "PHL",
		"cnt": "448"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "RDU",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "BWI",
		"cnt": "128"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "DEN",
		"cnt": "394"
	},
	{
		"airline": "all",
		"airport1": "ITO",
		"airport2": "OGG",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "RDU",
		"cnt": "278"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "JAX",
		"cnt": "262"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "CHA",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "CAK",
		"airport2": "MCO",
		"cnt": "95"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "MDW",
		"cnt": "304"
	},
	{
		"airline": "all",
		"airport1": "FLL",
		"airport2": "MEM",
		"cnt": "80"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "LIT",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "EWR",
		"cnt": "134"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "TPA",
		"cnt": "321"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "CAK",
		"cnt": "72"
	},
	{
		"airline": "all",
		"airport1": "PVD",
		"airport2": "EWR",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "SGF",
		"airport2": "ORD",
		"cnt": "325"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "MHT",
		"cnt": "35"
	},
	{
		"airline": "all",
		"airport1": "TUL",
		"airport2": "MIA",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "TYS",
		"cnt": "269"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "BDL",
		"cnt": "318"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "SDF",
		"cnt": "404"
	},
	{
		"airline": "all",
		"airport1": "EGE",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "DFW",
		"cnt": "392"
	},
	{
		"airline": "all",
		"airport1": "LEX",
		"airport2": "DFW",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "PHX",
		"airport2": "KOA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "SLC",
		"airport2": "SNA",
		"cnt": "316"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "BOS",
		"cnt": "302"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "SJC",
		"cnt": "127"
	},
	{
		"airline": "all",
		"airport1": "GRR",
		"airport2": "ORD",
		"cnt": "284"
	},
	{
		"airline": "all",
		"airport1": "LGB",
		"airport2": "SEA",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "TYS",
		"cnt": "33"
	},
	{
		"airline": "all",
		"airport1": "CLE",
		"airport2": "GSP",
		"cnt": "48"
	},
	{
		"airline": "all",
		"airport1": "MCI",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "SJU",
		"cnt": "60"
	},
	{
		"airline": "all",
		"airport1": "JFK",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "LGA",
		"cnt": "163"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "TPA",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "OMA",
		"airport2": "DEN",
		"cnt": "399"
	},
	{
		"airline": "all",
		"airport1": "CRW",
		"airport2": "ATL",
		"cnt": "259"
	},
	{
		"airline": "all",
		"airport1": "DCA",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "OAK",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "LFT",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "SEA",
		"cnt": "827"
	},
	{
		"airline": "all",
		"airport1": "IAD",
		"airport2": "IND",
		"cnt": "107"
	},
	{
		"airline": "all",
		"airport1": "RNO",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DTW",
		"airport2": "LGA",
		"cnt": "737"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "CLE",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "BNA",
		"airport2": "PHL",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "PIT",
		"cnt": "640"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "CLT",
		"cnt": "264"
	},
	{
		"airline": "all",
		"airport1": "MHT",
		"airport2": "CLE",
		"cnt": "134"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "RSW",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "IAH",
		"airport2": "BTR",
		"cnt": "237"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "PNS",
		"cnt": "120"
	},
	{
		"airline": "all",
		"airport1": "BUF",
		"airport2": "IAD",
		"cnt": "220"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "PSP",
		"cnt": "4"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "OMA",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "MCI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ABQ",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "MSP",
		"airport2": "PSC",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "IAD",
		"cnt": "141"
	},
	{
		"airline": "all",
		"airport1": "EKO",
		"airport2": "SLC",
		"cnt": "216"
	},
	{
		"airline": "all",
		"airport1": "ORD",
		"airport2": "MDT",
		"cnt": "312"
	},
	{
		"airline": "all",
		"airport1": "OGG",
		"airport2": "PDX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "LAS",
		"airport2": "IAH",
		"cnt": "383"
	},
	{
		"airline": "all",
		"airport1": "LIT",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "DEN",
		"airport2": "COS",
		"cnt": "604"
	},
	{
		"airline": "all",
		"airport1": "HOU",
		"airport2": "HRL",
		"cnt": "358"
	},
	{
		"airline": "all",
		"airport1": "HNL",
		"airport2": "DEN",
		"cnt": "64"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "FSM",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ACT",
		"airport2": "DFW",
		"cnt": "100"
	},
	{
		"airline": "all",
		"airport1": "HLN",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "FSD",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "HOU",
		"cnt": "444"
	},
	{
		"airline": "all",
		"airport1": "GSP",
		"airport2": "IAH",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "BDL",
		"airport2": "PBI",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "GSP",
		"airport2": "IAD",
		"cnt": "92"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "TPA",
		"cnt": "104"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "PDX",
		"cnt": "470"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "CLE",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "ATL",
		"airport2": "LWB",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "CMH",
		"airport2": "MCO",
		"cnt": "212"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "IAD",
		"cnt": "570"
	},
	{
		"airline": "all",
		"airport1": "LAX",
		"airport2": "IAH",
		"cnt": "483"
	},
	{
		"airline": "all",
		"airport1": "AUS",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "PDX",
		"airport2": "MSP",
		"cnt": "160"
	},
	{
		"airline": "all",
		"airport1": "SFO",
		"airport2": "CLT",
		"cnt": "168"
	},
	{
		"airline": "all",
		"airport1": "XNA",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "all",
		"airport1": "DRO",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "CVG",
		"airport2": "DTW",
		"cnt": "108"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BWI",
		"airport2": "SLC",
		"cnt": "156"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MSY",
		"cnt": "336"
	},
	{
		"airline": "all",
		"airport1": "GNV",
		"airport2": "ATL",
		"cnt": "364"
	},
	{
		"airline": "all",
		"airport1": "RSW",
		"airport2": "DTW",
		"cnt": "268"
	},
	{
		"airline": "all",
		"airport1": "DFW",
		"airport2": "MSN",
		"cnt": "150"
	},
	{
		"airline": "all",
		"airport1": "OME",
		"airport2": "ANC",
		"cnt": "84"
	},
	{
		"airline": "all",
		"airport1": "BHM",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "all",
		"airport1": "BOI",
		"airport2": "RNO",
		"cnt": "105"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "PHL",
		"cnt": "1162"
	},
	{
		"airline": "all",
		"airport1": "DAY",
		"airport2": "ORD",
		"cnt": "386"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "PHF",
		"cnt": "56"
	},
	{
		"airline": "all",
		"airport1": "BOS",
		"airport2": "PHX",
		"cnt": "288"
	},
	{
		"airline": "all",
		"airport1": "HPN",
		"airport2": "PBI",
		"cnt": "272"
	},
	{
		"airline": "all",
		"airport1": "MKE",
		"airport2": "EWR",
		"cnt": "144"
	},
	{
		"airline": "all",
		"airport1": "CLT",
		"airport2": "MSP",
		"cnt": "245"
	},
	{
		"airline": "HA",
		"airport1": "HNL",
		"airport2": "LIH",
		"cnt": "940"
	},
	{
		"airline": "HA",
		"airport1": "LAS",
		"airport2": "OGG",
		"cnt": "16"
	},
	{
		"airline": "HA",
		"airport1": "SFO",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "SJC",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "PDX",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "ITO",
		"airport2": "OGG",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "PDX",
		"airport2": "OGG",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "OGG",
		"airport2": "HNL",
		"cnt": "1344"
	},
	{
		"airline": "HA",
		"airport1": "SMF",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "OAK",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "LAX",
		"airport2": "HNL",
		"cnt": "112"
	},
	{
		"airline": "HA",
		"airport1": "PHX",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "ITO",
		"airport2": "HNL",
		"cnt": "768"
	},
	{
		"airline": "HA",
		"airport1": "KOA",
		"airport2": "HNL",
		"cnt": "956"
	},
	{
		"airline": "HA",
		"airport1": "SEA",
		"airport2": "HNL",
		"cnt": "80"
	},
	{
		"airline": "HA",
		"airport1": "SAN",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "SEA",
		"airport2": "OGG",
		"cnt": "56"
	},
	{
		"airline": "HA",
		"airport1": "LIH",
		"airport2": "OGG",
		"cnt": "28"
	},
	{
		"airline": "HA",
		"airport1": "KOA",
		"airport2": "OGG",
		"cnt": "112"
	},
	{
		"airline": "HA",
		"airport1": "LAS",
		"airport2": "HNL",
		"cnt": "136"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "CLT",
		"cnt": "134"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "BOS",
		"cnt": "8"
	},
	{
		"airline": "CO",
		"airport1": "SNA",
		"airport2": "IAH",
		"cnt": "252"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "SMF",
		"cnt": "164"
	},
	{
		"airline": "CO",
		"airport1": "PHX",
		"airport2": "EWR",
		"cnt": "180"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "HDN",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "MSP",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "PBI",
		"cnt": "20"
	},
	{
		"airline": "CO",
		"airport1": "HNL",
		"airport2": "GUM",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "EWR",
		"cnt": "603"
	},
	{
		"airline": "CO",
		"airport1": "PDX",
		"airport2": "IAH",
		"cnt": "168"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "ORD",
		"cnt": "55"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "BOS",
		"cnt": "408"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "GUC",
		"cnt": "42"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "TUL",
		"cnt": "48"
	},
	{
		"airline": "CO",
		"airport1": "OKC",
		"airport2": "IAH",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "ORD",
		"airport2": "EWR",
		"cnt": "346"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "PIT",
		"cnt": "112"
	},
	{
		"airline": "CO",
		"airport1": "ORD",
		"airport2": "FLL",
		"cnt": "52"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "TUS",
		"cnt": "20"
	},
	{
		"airline": "CO",
		"airport1": "DEN",
		"airport2": "FLL",
		"cnt": "24"
	},
	{
		"airline": "CO",
		"airport1": "LAS",
		"airport2": "EWR",
		"cnt": "300"
	},
	{
		"airline": "CO",
		"airport1": "SEA",
		"airport2": "IAH",
		"cnt": "295"
	},
	{
		"airline": "CO",
		"airport1": "MCO",
		"airport2": "IAH",
		"cnt": "324"
	},
	{
		"airline": "CO",
		"airport1": "PHL",
		"airport2": "IAH",
		"cnt": "250"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "SJU",
		"cnt": "12"
	},
	{
		"airline": "CO",
		"airport1": "SFO",
		"airport2": "IAH",
		"cnt": "368"
	},
	{
		"airline": "CO",
		"airport1": "OMA",
		"airport2": "IAH",
		"cnt": "77"
	},
	{
		"airline": "CO",
		"airport1": "ABQ",
		"airport2": "IAH",
		"cnt": "33"
	},
	{
		"airline": "CO",
		"airport1": "DEN",
		"airport2": "IAH",
		"cnt": "460"
	},
	{
		"airline": "CO",
		"airport1": "BOS",
		"airport2": "IAH",
		"cnt": "242"
	},
	{
		"airline": "CO",
		"airport1": "MIA",
		"airport2": "EWR",
		"cnt": "280"
	},
	{
		"airline": "CO",
		"airport1": "AUS",
		"airport2": "EWR",
		"cnt": "134"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "DEN",
		"cnt": "170"
	},
	{
		"airline": "CO",
		"airport1": "IND",
		"airport2": "EWR",
		"cnt": "2"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "SAT",
		"cnt": "92"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "JAX",
		"cnt": "20"
	},
	{
		"airline": "CO",
		"airport1": "MSY",
		"airport2": "IAH",
		"cnt": "556"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "SFO",
		"cnt": "272"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "MCO",
		"cnt": "156"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "BQN",
		"cnt": "54"
	},
	{
		"airline": "CO",
		"airport1": "LAS",
		"airport2": "CLE",
		"cnt": "130"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "PBI",
		"cnt": "80"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "SJC",
		"cnt": "127"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "RSW",
		"cnt": "128"
	},
	{
		"airline": "CO",
		"airport1": "MCI",
		"airport2": "IAH",
		"cnt": "29"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "MIA",
		"cnt": "210"
	},
	{
		"airline": "CO",
		"airport1": "ATL",
		"airport2": "IAH",
		"cnt": "100"
	},
	{
		"airline": "CO",
		"airport1": "DTW",
		"airport2": "IAH",
		"cnt": "196"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "SJU",
		"cnt": "60"
	},
	{
		"airline": "CO",
		"airport1": "EGE",
		"airport2": "IAH",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "IAD",
		"cnt": "156"
	},
	{
		"airline": "CO",
		"airport1": "DEN",
		"airport2": "LAS",
		"cnt": "24"
	},
	{
		"airline": "CO",
		"airport1": "SNA",
		"airport2": "EWR",
		"cnt": "120"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "ORD",
		"cnt": "518"
	},
	{
		"airline": "CO",
		"airport1": "SEA",
		"airport2": "EWR",
		"cnt": "128"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "CLE",
		"cnt": "330"
	},
	{
		"airline": "CO",
		"airport1": "LAS",
		"airport2": "SFO",
		"cnt": "24"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "PHX",
		"cnt": "80"
	},
	{
		"airline": "CO",
		"airport1": "MIA",
		"airport2": "CLE",
		"cnt": "20"
	},
	{
		"airline": "CO",
		"airport1": "LAX",
		"airport2": "HNL",
		"cnt": "112"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "DFW",
		"cnt": "234"
	},
	{
		"airline": "CO",
		"airport1": "SAN",
		"airport2": "IAH",
		"cnt": "318"
	},
	{
		"airline": "CO",
		"airport1": "PDX",
		"airport2": "EWR",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "DCA",
		"cnt": "408"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "DEN",
		"cnt": "88"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "TPA",
		"cnt": "266"
	},
	{
		"airline": "CO",
		"airport1": "RNO",
		"airport2": "IAH",
		"cnt": "24"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "MTJ",
		"cnt": "14"
	},
	{
		"airline": "CO",
		"airport1": "LGA",
		"airport2": "IAH",
		"cnt": "414"
	},
	{
		"airline": "CO",
		"airport1": "LGA",
		"airport2": "CLE",
		"cnt": "64"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "SAT",
		"cnt": "412"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "TPA",
		"cnt": "310"
	},
	{
		"airline": "CO",
		"airport1": "FLL",
		"airport2": "EWR",
		"cnt": "408"
	},
	{
		"airline": "CO",
		"airport1": "RSW",
		"airport2": "CLE",
		"cnt": "105"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "TPA",
		"cnt": "78"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "MTJ",
		"cnt": "44"
	},
	{
		"airline": "CO",
		"airport1": "ORD",
		"airport2": "PBI",
		"cnt": "24"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "EGE",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "LAX",
		"airport2": "OGG",
		"cnt": "40"
	},
	{
		"airline": "CO",
		"airport1": "SAN",
		"airport2": "EWR",
		"cnt": "160"
	},
	{
		"airline": "CO",
		"airport1": "LAX",
		"airport2": "EWR",
		"cnt": "320"
	},
	{
		"airline": "CO",
		"airport1": "ANC",
		"airport2": "SEA",
		"cnt": "80"
	},
	{
		"airline": "CO",
		"airport1": "LAS",
		"airport2": "IAH",
		"cnt": "383"
	},
	{
		"airline": "CO",
		"airport1": "DFW",
		"airport2": "IAH",
		"cnt": "108"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "MSY",
		"cnt": "96"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "CLT",
		"cnt": "62"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "PHX",
		"cnt": "262"
	},
	{
		"airline": "CO",
		"airport1": "ATL",
		"airport2": "EWR",
		"cnt": "112"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "MFE",
		"cnt": "168"
	},
	{
		"airline": "CO",
		"airport1": "RDU",
		"airport2": "IAH",
		"cnt": "102"
	},
	{
		"airline": "CO",
		"airport1": "SFO",
		"airport2": "CLE",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "LAX",
		"airport2": "IAH",
		"cnt": "483"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "ONT",
		"cnt": "112"
	},
	{
		"airline": "CO",
		"airport1": "ELP",
		"airport2": "IAH",
		"cnt": "33"
	},
	{
		"airline": "CO",
		"airport1": "HNL",
		"airport2": "EWR",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "STT",
		"airport2": "EWR",
		"cnt": "64"
	},
	{
		"airline": "CO",
		"airport1": "MCO",
		"airport2": "EWR",
		"cnt": "492"
	},
	{
		"airline": "CO",
		"airport1": "FLL",
		"airport2": "IAH",
		"cnt": "266"
	},
	{
		"airline": "CO",
		"airport1": "GUM",
		"airport2": "SPN",
		"cnt": "2"
	},
	{
		"airline": "CO",
		"airport1": "FLL",
		"airport2": "CLE",
		"cnt": "101"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "PBI",
		"cnt": "388"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "SJU",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "EWR",
		"cnt": "318"
	},
	{
		"airline": "CO",
		"airport1": "CLE",
		"airport2": "DFW",
		"cnt": "14"
	},
	{
		"airline": "CO",
		"airport1": "AUS",
		"airport2": "IAH",
		"cnt": "416"
	},
	{
		"airline": "CO",
		"airport1": "HDN",
		"airport2": "EWR",
		"cnt": "8"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "BWI",
		"cnt": "202"
	},
	{
		"airline": "CO",
		"airport1": "CMH",
		"airport2": "IAH",
		"cnt": "25"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "IND",
		"cnt": "82"
	},
	{
		"airline": "CO",
		"airport1": "EWR",
		"airport2": "RSW",
		"cnt": "185"
	},
	{
		"airline": "CO",
		"airport1": "IAH",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "CO",
		"airport1": "SLC",
		"airport2": "IAH",
		"cnt": "112"
	},
	{
		"airline": "CO",
		"airport1": "LAX",
		"airport2": "CLE",
		"cnt": "108"
	},
	{
		"airline": "UA",
		"airport1": "PIT",
		"airport2": "DEN",
		"cnt": "92"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "AUS",
		"cnt": "24"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "LAS",
		"cnt": "275"
	},
	{
		"airline": "UA",
		"airport1": "MSP",
		"airport2": "ORD",
		"cnt": "240"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "SEA",
		"cnt": "276"
	},
	{
		"airline": "UA",
		"airport1": "LGA",
		"airport2": "ORD",
		"cnt": "758"
	},
	{
		"airline": "UA",
		"airport1": "MSY",
		"airport2": "DEN",
		"cnt": "123"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "SNA",
		"cnt": "214"
	},
	{
		"airline": "UA",
		"airport1": "DTW",
		"airport2": "ORD",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "CVG",
		"cnt": "48"
	},
	{
		"airline": "UA",
		"airport1": "LIH",
		"airport2": "LAX",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "MSP",
		"cnt": "166"
	},
	{
		"airline": "UA",
		"airport1": "PHX",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "SFO",
		"cnt": "494"
	},
	{
		"airline": "UA",
		"airport1": "BOS",
		"airport2": "DEN",
		"cnt": "168"
	},
	{
		"airline": "UA",
		"airport1": "OKC",
		"airport2": "DEN",
		"cnt": "89"
	},
	{
		"airline": "UA",
		"airport1": "KOA",
		"airport2": "ORD",
		"cnt": "6"
	},
	{
		"airline": "UA",
		"airport1": "DFW",
		"airport2": "LAX",
		"cnt": "2"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "FSD",
		"cnt": "80"
	},
	{
		"airline": "UA",
		"airport1": "ROC",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "SFO",
		"cnt": "512"
	},
	{
		"airline": "UA",
		"airport1": "ICT",
		"airport2": "DEN",
		"cnt": "52"
	},
	{
		"airline": "UA",
		"airport1": "MCO",
		"airport2": "ORD",
		"cnt": "326"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "SAN",
		"cnt": "168"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "BDL",
		"cnt": "164"
	},
	{
		"airline": "UA",
		"airport1": "CMH",
		"airport2": "DEN",
		"cnt": "66"
	},
	{
		"airline": "UA",
		"airport1": "ALB",
		"airport2": "ORD",
		"cnt": "83"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "TPA",
		"cnt": "164"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "PHL",
		"cnt": "108"
	},
	{
		"airline": "UA",
		"airport1": "KOA",
		"airport2": "DEN",
		"cnt": "8"
	},
	{
		"airline": "UA",
		"airport1": "ABQ",
		"airport2": "DEN",
		"cnt": "33"
	},
	{
		"airline": "UA",
		"airport1": "JFK",
		"airport2": "LAX",
		"cnt": "327"
	},
	{
		"airline": "UA",
		"airport1": "RNO",
		"airport2": "DEN",
		"cnt": "123"
	},
	{
		"airline": "UA",
		"airport1": "BOS",
		"airport2": "SFO",
		"cnt": "270"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "LAX",
		"cnt": "798"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "PVD",
		"cnt": "90"
	},
	{
		"airline": "UA",
		"airport1": "GRR",
		"airport2": "ORD",
		"cnt": "68"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "IAD",
		"cnt": "414"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "IAD",
		"cnt": "417"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "DEN",
		"cnt": "460"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "IAH",
		"cnt": "44"
	},
	{
		"airline": "UA",
		"airport1": "PIT",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "PHL",
		"cnt": "96"
	},
	{
		"airline": "UA",
		"airport1": "PIT",
		"airport2": "ORD",
		"cnt": "140"
	},
	{
		"airline": "UA",
		"airport1": "EWR",
		"airport2": "DEN",
		"cnt": "76"
	},
	{
		"airline": "UA",
		"airport1": "MCI",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "SJU",
		"cnt": "96"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "STT",
		"cnt": "8"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "MIA",
		"cnt": "35"
	},
	{
		"airline": "UA",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "8"
	},
	{
		"airline": "UA",
		"airport1": "BOI",
		"airport2": "ORD",
		"cnt": "12"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "RIC",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "BZN",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "MSY",
		"airport2": "IAD",
		"cnt": "90"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "BOS",
		"cnt": "360"
	},
	{
		"airline": "UA",
		"airport1": "SNA",
		"airport2": "SFO",
		"cnt": "190"
	},
	{
		"airline": "UA",
		"airport1": "JAC",
		"airport2": "ORD",
		"cnt": "54"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "SLC",
		"cnt": "82"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "SEA",
		"cnt": "308"
	},
	{
		"airline": "UA",
		"airport1": "EWR",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "OAK",
		"cnt": "98"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "BDL",
		"cnt": "136"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "LIH",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "LGA",
		"cnt": "250"
	},
	{
		"airline": "UA",
		"airport1": "ATL",
		"airport2": "IAD",
		"cnt": "14"
	},
	{
		"airline": "UA",
		"airport1": "PIT",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "ORD",
		"cnt": "554"
	},
	{
		"airline": "UA",
		"airport1": "OGG",
		"airport2": "SFO",
		"cnt": "120"
	},
	{
		"airline": "UA",
		"airport1": "PDX",
		"airport2": "SFO",
		"cnt": "146"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "STT",
		"cnt": "17"
	},
	{
		"airline": "UA",
		"airport1": "IAH",
		"airport2": "ORD",
		"cnt": "88"
	},
	{
		"airline": "UA",
		"airport1": "EGE",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "UA",
		"airport1": "IAH",
		"airport2": "IAD",
		"cnt": "24"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "PDX",
		"cnt": "244"
	},
	{
		"airline": "UA",
		"airport1": "PSP",
		"airport2": "DEN",
		"cnt": "32"
	},
	{
		"airline": "UA",
		"airport1": "SMF",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "LAS",
		"airport2": "SFO",
		"cnt": "311"
	},
	{
		"airline": "UA",
		"airport1": "LAS",
		"airport2": "LAX",
		"cnt": "207"
	},
	{
		"airline": "UA",
		"airport1": "MIA",
		"airport2": "DEN",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "DCA",
		"airport2": "ORD",
		"cnt": "582"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "MSY",
		"cnt": "23"
	},
	{
		"airline": "UA",
		"airport1": "DFW",
		"airport2": "DEN",
		"cnt": "185"
	},
	{
		"airline": "UA",
		"airport1": "SAN",
		"airport2": "ORD",
		"cnt": "238"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "HNL",
		"cnt": "176"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "BOI",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "SEA",
		"cnt": "248"
	},
	{
		"airline": "UA",
		"airport1": "JFK",
		"airport2": "SFO",
		"cnt": "384"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "SLC",
		"cnt": "24"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "BWI",
		"cnt": "198"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "LIH",
		"cnt": "8"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "ABQ",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "BUF",
		"airport2": "ORD",
		"cnt": "72"
	},
	{
		"airline": "UA",
		"airport1": "SJC",
		"airport2": "DEN",
		"cnt": "127"
	},
	{
		"airline": "UA",
		"airport1": "MCO",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "DFW",
		"cnt": "66"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "DFW",
		"cnt": "84"
	},
	{
		"airline": "UA",
		"airport1": "BWI",
		"airport2": "DEN",
		"cnt": "198"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "ORD",
		"cnt": "386"
	},
	{
		"airline": "UA",
		"airport1": "KOA",
		"airport2": "LAX",
		"cnt": "80"
	},
	{
		"airline": "UA",
		"airport1": "JAX",
		"airport2": "ORD",
		"cnt": "71"
	},
	{
		"airline": "UA",
		"airport1": "HNL",
		"airport2": "SFO",
		"cnt": "212"
	},
	{
		"airline": "UA",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "80"
	},
	{
		"airline": "UA",
		"airport1": "BOS",
		"airport2": "IAD",
		"cnt": "273"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "PHL",
		"cnt": "212"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "SJU",
		"cnt": "72"
	},
	{
		"airline": "UA",
		"airport1": "SMF",
		"airport2": "DEN",
		"cnt": "158"
	},
	{
		"airline": "UA",
		"airport1": "MSP",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "EWR",
		"airport2": "ORD",
		"cnt": "315"
	},
	{
		"airline": "UA",
		"airport1": "OGG",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "UA",
		"airport1": "LAS",
		"airport2": "IAD",
		"cnt": "141"
	},
	{
		"airline": "UA",
		"airport1": "SEA",
		"airport2": "IAD",
		"cnt": "168"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "MDT",
		"cnt": "52"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "DEN",
		"cnt": "530"
	},
	{
		"airline": "UA",
		"airport1": "GEG",
		"airport2": "DEN",
		"cnt": "106"
	},
	{
		"airline": "UA",
		"airport1": "TPA",
		"airport2": "DEN",
		"cnt": "116"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "MTJ",
		"cnt": "8"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "MCO",
		"cnt": "80"
	},
	{
		"airline": "UA",
		"airport1": "HNL",
		"airport2": "DEN",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "CLT",
		"cnt": "81"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "OGG",
		"cnt": "6"
	},
	{
		"airline": "UA",
		"airport1": "PDX",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "PHX",
		"airport2": "SFO",
		"cnt": "137"
	},
	{
		"airline": "UA",
		"airport1": "TUL",
		"airport2": "DEN",
		"cnt": "100"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "RNO",
		"cnt": "39"
	},
	{
		"airline": "UA",
		"airport1": "CMH",
		"airport2": "ORD",
		"cnt": "82"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "SAN",
		"cnt": "263"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "OMA",
		"cnt": "86"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "PDX",
		"cnt": "1"
	},
	{
		"airline": "UA",
		"airport1": "PSP",
		"airport2": "ORD",
		"cnt": "24"
	},
	{
		"airline": "UA",
		"airport1": "AUS",
		"airport2": "DEN",
		"cnt": "48"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "IAD",
		"cnt": "404"
	},
	{
		"airline": "UA",
		"airport1": "SAT",
		"airport2": "IAD",
		"cnt": "64"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "SAT",
		"cnt": "32"
	},
	{
		"airline": "UA",
		"airport1": "PDX",
		"airport2": "DEN",
		"cnt": "170"
	},
	{
		"airline": "UA",
		"airport1": "MCO",
		"airport2": "DEN",
		"cnt": "228"
	},
	{
		"airline": "UA",
		"airport1": "SNA",
		"airport2": "ORD",
		"cnt": "162"
	},
	{
		"airline": "UA",
		"airport1": "BIL",
		"airport2": "DEN",
		"cnt": "100"
	},
	{
		"airline": "UA",
		"airport1": "LAS",
		"airport2": "DEN",
		"cnt": "295"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "OMA",
		"cnt": "182"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "MCO",
		"cnt": "286"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "CLE",
		"cnt": "24"
	},
	{
		"airline": "UA",
		"airport1": "SFO",
		"airport2": "SAN",
		"cnt": "352"
	},
	{
		"airline": "UA",
		"airport1": "IAD",
		"airport2": "RDU",
		"cnt": "123"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "TPA",
		"cnt": "212"
	},
	{
		"airline": "UA",
		"airport1": "CLE",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "OGG",
		"cnt": "28"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "DSM",
		"cnt": "88"
	},
	{
		"airline": "UA",
		"airport1": "STL",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "OGG",
		"airport2": "KOA",
		"cnt": "6"
	},
	{
		"airline": "UA",
		"airport1": "STT",
		"airport2": "SJU",
		"cnt": "25"
	},
	{
		"airline": "UA",
		"airport1": "SMF",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "UA",
		"airport1": "DEN",
		"airport2": "DCA",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "ONT",
		"airport2": "DEN",
		"cnt": "156"
	},
	{
		"airline": "UA",
		"airport1": "PHX",
		"airport2": "DEN",
		"cnt": "296"
	},
	{
		"airline": "UA",
		"airport1": "KOA",
		"airport2": "SFO",
		"cnt": "112"
	},
	{
		"airline": "UA",
		"airport1": "LAX",
		"airport2": "PHL",
		"cnt": "52"
	},
	{
		"airline": "UA",
		"airport1": "IAH",
		"airport2": "SFO",
		"cnt": "48"
	},
	{
		"airline": "UA",
		"airport1": "RDU",
		"airport2": "ORD",
		"cnt": "28"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "PHX",
		"cnt": "205"
	},
	{
		"airline": "UA",
		"airport1": "BOS",
		"airport2": "LAX",
		"cnt": "108"
	},
	{
		"airline": "UA",
		"airport1": "MSY",
		"airport2": "ORD",
		"cnt": "48"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "DSM",
		"cnt": "40"
	},
	{
		"airline": "UA",
		"airport1": "ORD",
		"airport2": "MIA",
		"cnt": "56"
	},
	{
		"airline": "UA",
		"airport1": "JAC",
		"airport2": "DEN",
		"cnt": "68"
	},
	{
		"airline": "UA",
		"airport1": "DFW",
		"airport2": "ORD",
		"cnt": "100"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "GEG",
		"cnt": "37"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "SAN",
		"cnt": "242"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "CAK",
		"cnt": "72"
	},
	{
		"airline": "F9",
		"airport1": "FLL",
		"airport2": "MKE",
		"cnt": "2"
	},
	{
		"airline": "F9",
		"airport1": "LAS",
		"airport2": "MKE",
		"cnt": "60"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "MCO",
		"cnt": "82"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "TUS",
		"cnt": "110"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "BOS",
		"cnt": "120"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "DFW",
		"cnt": "2"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "DTW",
		"cnt": "152"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "PIE",
		"cnt": "52"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "ATL",
		"cnt": "150"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "IND",
		"cnt": "152"
	},
	{
		"airline": "F9",
		"airport1": "MDW",
		"airport2": "DEN",
		"cnt": "192"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "DFW",
		"cnt": "230"
	},
	{
		"airline": "F9",
		"airport1": "DCA",
		"airport2": "DEN",
		"cnt": "167"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "DAY",
		"cnt": "104"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "OKC",
		"cnt": "2"
	},
	{
		"airline": "F9",
		"airport1": "STL",
		"airport2": "DEN",
		"cnt": "128"
	},
	{
		"airline": "F9",
		"airport1": "LAS",
		"airport2": "DEN",
		"cnt": "374"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "RSW",
		"cnt": "32"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "MSN",
		"cnt": "48"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "BNA",
		"cnt": "56"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "MSP",
		"cnt": "196"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "SFO",
		"cnt": "137"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "LGA",
		"cnt": "110"
	},
	{
		"airline": "F9",
		"airport1": "MCI",
		"airport2": "DEN",
		"cnt": "82"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "RSW",
		"cnt": "56"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "DEN",
		"cnt": "162"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "MSP",
		"cnt": "4"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "PHF",
		"cnt": "24"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "PHX",
		"cnt": "92"
	},
	{
		"airline": "F9",
		"airport1": "SLC",
		"airport2": "DEN",
		"cnt": "168"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "LAX",
		"cnt": "280"
	},
	{
		"airline": "F9",
		"airport1": "DCA",
		"airport2": "MKE",
		"cnt": "101"
	},
	{
		"airline": "F9",
		"airport1": "AUS",
		"airport2": "DEN",
		"cnt": "98"
	},
	{
		"airline": "F9",
		"airport1": "SNA",
		"airport2": "DEN",
		"cnt": "222"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "MCO",
		"cnt": "115"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "F9",
		"airport1": "TPA",
		"airport2": "DEN",
		"cnt": "80"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "PHL",
		"cnt": "40"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "LAX",
		"cnt": "16"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "SMF",
		"cnt": "104"
	},
	{
		"airline": "F9",
		"airport1": "HOU",
		"airport2": "DEN",
		"cnt": "106"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "PHX",
		"cnt": "285"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "SEA",
		"cnt": "224"
	},
	{
		"airline": "F9",
		"airport1": "MKE",
		"airport2": "LGA",
		"cnt": "148"
	},
	{
		"airline": "F9",
		"airport1": "DEN",
		"airport2": "PDX",
		"cnt": "205"
	},
	{
		"airline": "AS",
		"airport1": "YAK",
		"airport2": "CDV",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "FAI",
		"airport2": "ANC",
		"cnt": "410"
	},
	{
		"airline": "AS",
		"airport1": "ATL",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "SNA",
		"cnt": "438"
	},
	{
		"airline": "AS",
		"airport1": "BUR",
		"airport2": "SEA",
		"cnt": "160"
	},
	{
		"airline": "AS",
		"airport1": "FAI",
		"airport2": "SCC",
		"cnt": "28"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "SJC",
		"cnt": "280"
	},
	{
		"airline": "AS",
		"airport1": "ANC",
		"airport2": "OTZ",
		"cnt": "84"
	},
	{
		"airline": "AS",
		"airport1": "LAS",
		"airport2": "SEA",
		"cnt": "390"
	},
	{
		"airline": "AS",
		"airport1": "OGG",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "JNU",
		"airport2": "KTN",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "MSP",
		"cnt": "104"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "OAK",
		"cnt": "208"
	},
	{
		"airline": "AS",
		"airport1": "ORD",
		"airport2": "SEA",
		"cnt": "143"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "DFW",
		"cnt": "155"
	},
	{
		"airline": "AS",
		"airport1": "ORD",
		"airport2": "PDX",
		"cnt": "46"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "LIH",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "KTN",
		"airport2": "SEA",
		"cnt": "168"
	},
	{
		"airline": "AS",
		"airport1": "KTN",
		"airport2": "WRG",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "ANC",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SCC",
		"airport2": "BRW",
		"cnt": "36"
	},
	{
		"airline": "AS",
		"airport1": "PDX",
		"airport2": "KOA",
		"cnt": "32"
	},
	{
		"airline": "AS",
		"airport1": "ANC",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "MIA",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "JNU",
		"airport2": "SIT",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "ANC",
		"airport2": "PDX",
		"cnt": "104"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "JNU",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "PSP",
		"airport2": "SFO",
		"cnt": "104"
	},
	{
		"airline": "AS",
		"airport1": "PDX",
		"airport2": "PHX",
		"cnt": "152"
	},
	{
		"airline": "AS",
		"airport1": "ADK",
		"airport2": "ANC",
		"cnt": "16"
	},
	{
		"airline": "AS",
		"airport1": "SJC",
		"airport2": "OGG",
		"cnt": "24"
	},
	{
		"airline": "AS",
		"airport1": "SFO",
		"airport2": "SEA",
		"cnt": "376"
	},
	{
		"airline": "AS",
		"airport1": "AUS",
		"airport2": "SEA",
		"cnt": "52"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "LAX",
		"cnt": "523"
	},
	{
		"airline": "AS",
		"airport1": "OTZ",
		"airport2": "OME",
		"cnt": "84"
	},
	{
		"airline": "AS",
		"airport1": "AUS",
		"airport2": "SJC",
		"cnt": "94"
	},
	{
		"airline": "AS",
		"airport1": "FAI",
		"airport2": "BRW",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SMF",
		"airport2": "OGG",
		"cnt": "28"
	},
	{
		"airline": "AS",
		"airport1": "ADQ",
		"airport2": "ANC",
		"cnt": "104"
	},
	{
		"airline": "AS",
		"airport1": "PHX",
		"airport2": "SEA",
		"cnt": "264"
	},
	{
		"airline": "AS",
		"airport1": "HNL",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "ANC",
		"airport2": "BET",
		"cnt": "160"
	},
	{
		"airline": "AS",
		"airport1": "LAX",
		"airport2": "PDX",
		"cnt": "266"
	},
	{
		"airline": "AS",
		"airport1": "TUS",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "SMF",
		"cnt": "216"
	},
	{
		"airline": "AS",
		"airport1": "PDX",
		"airport2": "PSP",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "LAS",
		"airport2": "BLI",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "OAK",
		"airport2": "KOA",
		"cnt": "24"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "BOS",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "KOA",
		"cnt": "80"
	},
	{
		"airline": "AS",
		"airport1": "SIT",
		"airport2": "KTN",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "MCO",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "SJC",
		"airport2": "PDX",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "JNU",
		"airport2": "ANC",
		"cnt": "168"
	},
	{
		"airline": "AS",
		"airport1": "CDV",
		"airport2": "ANC",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "JNU",
		"airport2": "YAK",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "OGG",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "IAH",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "PDX",
		"airport2": "SNA",
		"cnt": "224"
	},
	{
		"airline": "AS",
		"airport1": "ANC",
		"airport2": "SCC",
		"cnt": "40"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "EWR",
		"cnt": "108"
	},
	{
		"airline": "AS",
		"airport1": "LAS",
		"airport2": "PDX",
		"cnt": "160"
	},
	{
		"airline": "AS",
		"airport1": "OGG",
		"airport2": "ANC",
		"cnt": "24"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "GEG",
		"cnt": "136"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "SAN",
		"cnt": "376"
	},
	{
		"airline": "AS",
		"airport1": "BOS",
		"airport2": "PDX",
		"cnt": "48"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "ANC",
		"cnt": "670"
	},
	{
		"airline": "AS",
		"airport1": "SFO",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "PSG",
		"airport2": "JNU",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "WRG",
		"airport2": "PSG",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "BRW",
		"airport2": "ANC",
		"cnt": "36"
	},
	{
		"airline": "AS",
		"airport1": "ONT",
		"airport2": "SEA",
		"cnt": "152"
	},
	{
		"airline": "AS",
		"airport1": "DCA",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "OGG",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "DCA",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "AS",
		"airport1": "OAK",
		"airport2": "OGG",
		"cnt": "32"
	},
	{
		"airline": "AS",
		"airport1": "SAN",
		"airport2": "PDX",
		"cnt": "168"
	},
	{
		"airline": "AS",
		"airport1": "SEA",
		"airport2": "HNL",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "DEN",
		"airport2": "SEA",
		"cnt": "164"
	},
	{
		"airline": "AS",
		"airport1": "PSP",
		"airport2": "SEA",
		"cnt": "152"
	},
	{
		"airline": "AS",
		"airport1": "FAI",
		"airport2": "SEA",
		"cnt": "112"
	},
	{
		"airline": "AS",
		"airport1": "OME",
		"airport2": "ANC",
		"cnt": "84"
	},
	{
		"airline": "US",
		"airport1": "DFW",
		"airport2": "PHX",
		"cnt": "288"
	},
	{
		"airline": "US",
		"airport1": "SAN",
		"airport2": "PHL",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "SNA",
		"airport2": "PHX",
		"cnt": "320"
	},
	{
		"airline": "US",
		"airport1": "TUS",
		"airport2": "PHX",
		"cnt": "96"
	},
	{
		"airline": "US",
		"airport1": "DFW",
		"airport2": "PHL",
		"cnt": "256"
	},
	{
		"airline": "US",
		"airport1": "SAN",
		"airport2": "PHX",
		"cnt": "344"
	},
	{
		"airline": "US",
		"airport1": "IND",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "EWR",
		"airport2": "CLT",
		"cnt": "432"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "LAX",
		"cnt": "224"
	},
	{
		"airline": "US",
		"airport1": "BWI",
		"airport2": "CLT",
		"cnt": "470"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "RSW",
		"cnt": "80"
	},
	{
		"airline": "US",
		"airport1": "ONT",
		"airport2": "PHX",
		"cnt": "272"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "LAS",
		"cnt": "280"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "RSW",
		"cnt": "192"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "MCI",
		"cnt": "160"
	},
	{
		"airline": "US",
		"airport1": "MSY",
		"airport2": "PHL",
		"cnt": "100"
	},
	{
		"airline": "US",
		"airport1": "EWR",
		"airport2": "PHX",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "RDU",
		"cnt": "232"
	},
	{
		"airline": "US",
		"airport1": "PBI",
		"airport2": "DCA",
		"cnt": "164"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "PIT",
		"cnt": "188"
	},
	{
		"airline": "US",
		"airport1": "SJC",
		"airport2": "PHX",
		"cnt": "276"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "PHX",
		"cnt": "336"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "LGA",
		"cnt": "500"
	},
	{
		"airline": "US",
		"airport1": "FLL",
		"airport2": "DCA",
		"cnt": "212"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "PHL",
		"cnt": "76"
	},
	{
		"airline": "US",
		"airport1": "SYR",
		"airport2": "DCA",
		"cnt": "48"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "SAT",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "FLL",
		"airport2": "PHL",
		"cnt": "280"
	},
	{
		"airline": "US",
		"airport1": "DAB",
		"airport2": "CLT",
		"cnt": "32"
	},
	{
		"airline": "US",
		"airport1": "TPA",
		"airport2": "CLT",
		"cnt": "448"
	},
	{
		"airline": "US",
		"airport1": "TPA",
		"airport2": "PHX",
		"cnt": "120"
	},
	{
		"airline": "US",
		"airport1": "LAS",
		"airport2": "BOS",
		"cnt": "54"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "SJU",
		"cnt": "200"
	},
	{
		"airline": "US",
		"airport1": "STT",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "DEN",
		"airport2": "PHX",
		"cnt": "288"
	},
	{
		"airline": "US",
		"airport1": "BDL",
		"airport2": "PHL",
		"cnt": "48"
	},
	{
		"airline": "US",
		"airport1": "OGG",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "TPA",
		"cnt": "274"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "MHT",
		"cnt": "32"
	},
	{
		"airline": "US",
		"airport1": "BUR",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "LAS",
		"cnt": "554"
	},
	{
		"airline": "US",
		"airport1": "SYR",
		"airport2": "PHL",
		"cnt": "48"
	},
	{
		"airline": "US",
		"airport1": "BNA",
		"airport2": "CLT",
		"cnt": "160"
	},
	{
		"airline": "US",
		"airport1": "RDU",
		"airport2": "CLT",
		"cnt": "390"
	},
	{
		"airline": "US",
		"airport1": "LAS",
		"airport2": "DFW",
		"cnt": "142"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "ELP",
		"cnt": "33"
	},
	{
		"airline": "US",
		"airport1": "BOS",
		"airport2": "CLT",
		"cnt": "498"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "DTW",
		"cnt": "204"
	},
	{
		"airline": "US",
		"airport1": "SFO",
		"airport2": "PHX",
		"cnt": "288"
	},
	{
		"airline": "US",
		"airport1": "RNO",
		"airport2": "PHX",
		"cnt": "241"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "STL",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "PIT",
		"airport2": "PHX",
		"cnt": "114"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "JAX",
		"cnt": "100"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "SFO",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "PIT",
		"airport2": "CLT",
		"cnt": "444"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "STT",
		"cnt": "64"
	},
	{
		"airline": "US",
		"airport1": "SFO",
		"airport2": "LAS",
		"cnt": "104"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "KOA",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "JAX",
		"airport2": "CLT",
		"cnt": "336"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "PBI",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "ANC",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "BWI",
		"airport2": "PHL",
		"cnt": "104"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "PBI",
		"cnt": "336"
	},
	{
		"airline": "US",
		"airport1": "IND",
		"airport2": "CLT",
		"cnt": "72"
	},
	{
		"airline": "US",
		"airport1": "ROC",
		"airport2": "CLT",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "HNL",
		"cnt": "96"
	},
	{
		"airline": "US",
		"airport1": "DTW",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PIT",
		"airport2": "DFW",
		"cnt": "2"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "JFK",
		"cnt": "170"
	},
	{
		"airline": "US",
		"airport1": "PVD",
		"airport2": "PHL",
		"cnt": "184"
	},
	{
		"airline": "US",
		"airport1": "LAX",
		"airport2": "PHX",
		"cnt": "344"
	},
	{
		"airline": "US",
		"airport1": "MCO",
		"airport2": "CLT",
		"cnt": "504"
	},
	{
		"airline": "US",
		"airport1": "IAH",
		"airport2": "CLT",
		"cnt": "326"
	},
	{
		"airline": "US",
		"airport1": "SMF",
		"airport2": "PHX",
		"cnt": "256"
	},
	{
		"airline": "US",
		"airport1": "MIA",
		"airport2": "CLT",
		"cnt": "360"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "DEN",
		"cnt": "98"
	},
	{
		"airline": "US",
		"airport1": "BDL",
		"airport2": "DCA",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "LAX",
		"airport2": "PHL",
		"cnt": "220"
	},
	{
		"airline": "US",
		"airport1": "LGA",
		"airport2": "BOS",
		"cnt": "760"
	},
	{
		"airline": "US",
		"airport1": "LAS",
		"airport2": "PHL",
		"cnt": "272"
	},
	{
		"airline": "US",
		"airport1": "MHT",
		"airport2": "PHL",
		"cnt": "48"
	},
	{
		"airline": "US",
		"airport1": "STX",
		"airport2": "CLT",
		"cnt": "8"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "FLL",
		"cnt": "448"
	},
	{
		"airline": "US",
		"airport1": "STL",
		"airport2": "CLT",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "BUF",
		"cnt": "72"
	},
	{
		"airline": "US",
		"airport1": "BDL",
		"airport2": "CLT",
		"cnt": "256"
	},
	{
		"airline": "US",
		"airport1": "MCO",
		"airport2": "DCA",
		"cnt": "262"
	},
	{
		"airline": "US",
		"airport1": "MEM",
		"airport2": "CLT",
		"cnt": "32"
	},
	{
		"airline": "US",
		"airport1": "LGA",
		"airport2": "PHL",
		"cnt": "52"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "MDT",
		"cnt": "96"
	},
	{
		"airline": "US",
		"airport1": "LAX",
		"airport2": "LAS",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "RSW",
		"airport2": "CLT",
		"cnt": "355"
	},
	{
		"airline": "US",
		"airport1": "BUF",
		"airport2": "CLT",
		"cnt": "204"
	},
	{
		"airline": "US",
		"airport1": "PVD",
		"airport2": "DCA",
		"cnt": "48"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "DFW",
		"cnt": "14"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "IND",
		"cnt": "64"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "ABQ",
		"cnt": "39"
	},
	{
		"airline": "US",
		"airport1": "MIA",
		"airport2": "PHL",
		"cnt": "192"
	},
	{
		"airline": "US",
		"airport1": "SYR",
		"airport2": "CLT",
		"cnt": "144"
	},
	{
		"airline": "US",
		"airport1": "ALB",
		"airport2": "CLT",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "CLT",
		"cnt": "476"
	},
	{
		"airline": "US",
		"airport1": "ATL",
		"airport2": "PHX",
		"cnt": "176"
	},
	{
		"airline": "US",
		"airport1": "MYR",
		"airport2": "CLT",
		"cnt": "152"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "DCA",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "OAK",
		"airport2": "PHX",
		"cnt": "263"
	},
	{
		"airline": "US",
		"airport1": "SEA",
		"airport2": "PHX",
		"cnt": "288"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "BUF",
		"cnt": "24"
	},
	{
		"airline": "US",
		"airport1": "PHL",
		"airport2": "JAX",
		"cnt": "156"
	},
	{
		"airline": "US",
		"airport1": "IAH",
		"airport2": "PHX",
		"cnt": "230"
	},
	{
		"airline": "US",
		"airport1": "MSY",
		"airport2": "CLT",
		"cnt": "200"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "PVD",
		"cnt": "240"
	},
	{
		"airline": "US",
		"airport1": "BOI",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "CLE",
		"airport2": "CLT",
		"cnt": "96"
	},
	{
		"airline": "US",
		"airport1": "CHS",
		"airport2": "CLT",
		"cnt": "40"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "RIC",
		"airport2": "CLT",
		"cnt": "188"
	},
	{
		"airline": "US",
		"airport1": "MCO",
		"airport2": "PHX",
		"cnt": "120"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "PDX",
		"cnt": "288"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "MKE",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "BWI",
		"cnt": "120"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "SJU",
		"cnt": "152"
	},
	{
		"airline": "US",
		"airport1": "SFO",
		"airport2": "CLT",
		"cnt": "168"
	},
	{
		"airline": "US",
		"airport1": "MCO",
		"airport2": "PHL",
		"cnt": "386"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "MSP",
		"cnt": "232"
	},
	{
		"airline": "US",
		"airport1": "MSP",
		"airport2": "PHL",
		"cnt": "104"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "BOS",
		"cnt": "176"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "PHL",
		"cnt": "539"
	},
	{
		"airline": "US",
		"airport1": "DEN",
		"airport2": "CLT",
		"cnt": "280"
	},
	{
		"airline": "US",
		"airport1": "GEG",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "US",
		"airport1": "SLC",
		"airport2": "PHX",
		"cnt": "264"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "PWM",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "CMH",
		"cnt": "110"
	},
	{
		"airline": "US",
		"airport1": "MCI",
		"airport2": "PHX",
		"cnt": "154"
	},
	{
		"airline": "US",
		"airport1": "LIH",
		"airport2": "PHX",
		"cnt": "42"
	},
	{
		"airline": "US",
		"airport1": "JFK",
		"airport2": "CLT",
		"cnt": "160"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "DFW",
		"cnt": "426"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "ABE",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "ORD",
		"cnt": "282"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "LGA",
		"cnt": "772"
	},
	{
		"airline": "US",
		"airport1": "ORD",
		"airport2": "PHL",
		"cnt": "372"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "CLT",
		"cnt": "392"
	},
	{
		"airline": "US",
		"airport1": "BOS",
		"airport2": "PHL",
		"cnt": "746"
	},
	{
		"airline": "US",
		"airport1": "ATL",
		"airport2": "PHL",
		"cnt": "216"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "TPA",
		"airport2": "DCA",
		"cnt": "212"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "ORD",
		"cnt": "440"
	},
	{
		"airline": "US",
		"airport1": "OMA",
		"airport2": "PHX",
		"cnt": "108"
	},
	{
		"airline": "US",
		"airport1": "SAT",
		"airport2": "CLT",
		"cnt": "56"
	},
	{
		"airline": "US",
		"airport1": "PHX",
		"airport2": "DTW",
		"cnt": "176"
	},
	{
		"airline": "US",
		"airport1": "DCA",
		"airport2": "BOS",
		"cnt": "744"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "ATL",
		"cnt": "408"
	},
	{
		"airline": "US",
		"airport1": "CLT",
		"airport2": "MSP",
		"cnt": "152"
	},
	{
		"airline": "XE",
		"airport1": "AVL",
		"airport2": "EWR",
		"cnt": "52"
	},
	{
		"airline": "XE",
		"airport1": "BNA",
		"airport2": "EWR",
		"cnt": "260"
	},
	{
		"airline": "XE",
		"airport1": "BNA",
		"airport2": "IAD",
		"cnt": "140"
	},
	{
		"airline": "XE",
		"airport1": "CHS",
		"airport2": "ORD",
		"cnt": "55"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "MHT",
		"cnt": "5"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "XNA",
		"cnt": "66"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "COS",
		"cnt": "103"
	},
	{
		"airline": "XE",
		"airport1": "MOB",
		"airport2": "IAH",
		"cnt": "260"
	},
	{
		"airline": "XE",
		"airport1": "AVP",
		"airport2": "ORD",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "ROC",
		"cnt": "87"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "OKC",
		"cnt": "117"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "STL",
		"cnt": "137"
	},
	{
		"airline": "XE",
		"airport1": "ABQ",
		"airport2": "IAH",
		"cnt": "222"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "GRB",
		"cnt": "90"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "TYS",
		"cnt": "50"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "IAD",
		"cnt": "70"
	},
	{
		"airline": "XE",
		"airport1": "CAK",
		"airport2": "ORD",
		"cnt": "160"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "DFW",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "MEM",
		"airport2": "DEN",
		"cnt": "85"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "IAD",
		"cnt": "224"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "ROC",
		"cnt": "132"
	},
	{
		"airline": "XE",
		"airport1": "GSP",
		"airport2": "ORD",
		"cnt": "78"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "LGA",
		"cnt": "47"
	},
	{
		"airline": "XE",
		"airport1": "JAX",
		"airport2": "EWR",
		"cnt": "200"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "BNA",
		"cnt": "39"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MAF",
		"cnt": "249"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "DAY",
		"cnt": "91"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "HSV",
		"cnt": "142"
	},
	{
		"airline": "XE",
		"airport1": "CHS",
		"airport2": "EWR",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "PIA",
		"cnt": "39"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "OMA",
		"cnt": "21"
	},
	{
		"airline": "XE",
		"airport1": "AMA",
		"airport2": "IAH",
		"cnt": "198"
	},
	{
		"airline": "XE",
		"airport1": "AVL",
		"airport2": "IAH",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "FSD",
		"cnt": "24"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "TUL",
		"cnt": "184"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "BUF",
		"cnt": "99"
	},
	{
		"airline": "XE",
		"airport1": "VPS",
		"airport2": "IAH",
		"cnt": "112"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CVG",
		"cnt": "212"
	},
	{
		"airline": "XE",
		"airport1": "CLT",
		"airport2": "IAD",
		"cnt": "53"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "TVC",
		"cnt": "109"
	},
	{
		"airline": "XE",
		"airport1": "GSO",
		"airport2": "EWR",
		"cnt": "203"
	},
	{
		"airline": "XE",
		"airport1": "IND",
		"airport2": "ORD",
		"cnt": "83"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "PNS",
		"cnt": "28"
	},
	{
		"airline": "XE",
		"airport1": "ABE",
		"airport2": "ORD",
		"cnt": "195"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "EWR",
		"cnt": "14"
	},
	{
		"airline": "XE",
		"airport1": "AUS",
		"airport2": "DEN",
		"cnt": "21"
	},
	{
		"airline": "XE",
		"airport1": "TUL",
		"airport2": "EWR",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "BHM",
		"airport2": "ORD",
		"cnt": "128"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "PIT",
		"cnt": "81"
	},
	{
		"airline": "XE",
		"airport1": "CLT",
		"airport2": "EWR",
		"cnt": "135"
	},
	{
		"airline": "XE",
		"airport1": "DTW",
		"airport2": "ORD",
		"cnt": "50"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "GSP",
		"cnt": "82"
	},
	{
		"airline": "XE",
		"airport1": "ALB",
		"airport2": "ORD",
		"cnt": "77"
	},
	{
		"airline": "XE",
		"airport1": "CAE",
		"airport2": "IAD",
		"cnt": "4"
	},
	{
		"airline": "XE",
		"airport1": "LIT",
		"airport2": "EWR",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "MSN",
		"cnt": "141"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "PVD",
		"cnt": "28"
	},
	{
		"airline": "XE",
		"airport1": "GRB",
		"airport2": "ORD",
		"cnt": "188"
	},
	{
		"airline": "XE",
		"airport1": "GRR",
		"airport2": "DEN",
		"cnt": "8"
	},
	{
		"airline": "XE",
		"airport1": "ABQ",
		"airport2": "DEN",
		"cnt": "44"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "LIT",
		"cnt": "142"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "SDF",
		"cnt": "177"
	},
	{
		"airline": "XE",
		"airport1": "MSN",
		"airport2": "CLE",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "DTW",
		"airport2": "EWR",
		"cnt": "232"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "SAV",
		"cnt": "84"
	},
	{
		"airline": "XE",
		"airport1": "LCH",
		"airport2": "IAH",
		"cnt": "54"
	},
	{
		"airline": "XE",
		"airport1": "LAN",
		"airport2": "ORD",
		"cnt": "26"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "PIT",
		"cnt": "128"
	},
	{
		"airline": "XE",
		"airport1": "GRR",
		"airport2": "ORD",
		"cnt": "68"
	},
	{
		"airline": "XE",
		"airport1": "OMA",
		"airport2": "IAH",
		"cnt": "248"
	},
	{
		"airline": "XE",
		"airport1": "MEM",
		"airport2": "ORD",
		"cnt": "131"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "SGF",
		"cnt": "51"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "MSY",
		"cnt": "36"
	},
	{
		"airline": "XE",
		"airport1": "LIT",
		"airport2": "IAH",
		"cnt": "306"
	},
	{
		"airline": "XE",
		"airport1": "GRK",
		"airport2": "IAH",
		"cnt": "29"
	},
	{
		"airline": "XE",
		"airport1": "MHT",
		"airport2": "EWR",
		"cnt": "208"
	},
	{
		"airline": "XE",
		"airport1": "SHV",
		"airport2": "IAH",
		"cnt": "124"
	},
	{
		"airline": "XE",
		"airport1": "IND",
		"airport2": "IAD",
		"cnt": "50"
	},
	{
		"airline": "XE",
		"airport1": "RAP",
		"airport2": "ORD",
		"cnt": "46"
	},
	{
		"airline": "XE",
		"airport1": "BOS",
		"airport2": "CLE",
		"cnt": "76"
	},
	{
		"airline": "XE",
		"airport1": "PIT",
		"airport2": "ORD",
		"cnt": "6"
	},
	{
		"airline": "XE",
		"airport1": "DFW",
		"airport2": "IAH",
		"cnt": "127"
	},
	{
		"airline": "XE",
		"airport1": "CAE",
		"airport2": "ORD",
		"cnt": "40"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "XNA",
		"cnt": "80"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "MSY",
		"cnt": "34"
	},
	{
		"airline": "XE",
		"airport1": "HRL",
		"airport2": "IAH",
		"cnt": "258"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MSY",
		"cnt": "26"
	},
	{
		"airline": "XE",
		"airport1": "PVD",
		"airport2": "EWR",
		"cnt": "216"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "MSP",
		"cnt": "143"
	},
	{
		"airline": "XE",
		"airport1": "OMA",
		"airport2": "EWR",
		"cnt": "112"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "SAV",
		"cnt": "148"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MSP",
		"cnt": "168"
	},
	{
		"airline": "XE",
		"airport1": "BNA",
		"airport2": "IAH",
		"cnt": "352"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "DSM",
		"cnt": "80"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "IND",
		"cnt": "1"
	},
	{
		"airline": "XE",
		"airport1": "HSV",
		"airport2": "ORD",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "TUS",
		"airport2": "IAH",
		"cnt": "73"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "MKE",
		"cnt": "186"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CRW",
		"cnt": "52"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CMH",
		"cnt": "44"
	},
	{
		"airline": "XE",
		"airport1": "JAX",
		"airport2": "CLE",
		"cnt": "22"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "TYS",
		"cnt": "34"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CRP",
		"cnt": "492"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "SYR",
		"cnt": "22"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MCO",
		"cnt": "24"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "MCI",
		"cnt": "154"
	},
	{
		"airline": "XE",
		"airport1": "OKC",
		"airport2": "DEN",
		"cnt": "77"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "MCO",
		"cnt": "6"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MCI",
		"cnt": "390"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "ELP",
		"cnt": "89"
	},
	{
		"airline": "XE",
		"airport1": "IND",
		"airport2": "EWR",
		"cnt": "176"
	},
	{
		"airline": "XE",
		"airport1": "PBI",
		"airport2": "CLE",
		"cnt": "36"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "RDU",
		"cnt": "22"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "ROC",
		"cnt": "159"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "LRD",
		"cnt": "180"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "PBI",
		"cnt": "126"
	},
	{
		"airline": "XE",
		"airport1": "ATL",
		"airport2": "IAD",
		"cnt": "15"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "XNA",
		"cnt": "126"
	},
	{
		"airline": "XE",
		"airport1": "MCI",
		"airport2": "IAD",
		"cnt": "36"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "CVG",
		"cnt": "54"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "GSP",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "RSW",
		"cnt": "2"
	},
	{
		"airline": "XE",
		"airport1": "BWI",
		"airport2": "EWR",
		"cnt": "132"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "RDU",
		"cnt": "153"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "BTV",
		"cnt": "49"
	},
	{
		"airline": "XE",
		"airport1": "ATL",
		"airport2": "IAH",
		"cnt": "168"
	},
	{
		"airline": "XE",
		"airport1": "LNK",
		"airport2": "DEN",
		"cnt": "33"
	},
	{
		"airline": "XE",
		"airport1": "DTW",
		"airport2": "IAH",
		"cnt": "4"
	},
	{
		"airline": "XE",
		"airport1": "GSO",
		"airport2": "IAH",
		"cnt": "97"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "SDF",
		"cnt": "36"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "BHM",
		"cnt": "302"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "MCI",
		"cnt": "105"
	},
	{
		"airline": "XE",
		"airport1": "IND",
		"airport2": "CLE",
		"cnt": "39"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "ORD",
		"cnt": "1"
	},
	{
		"airline": "XE",
		"airport1": "AEX",
		"airport2": "IAH",
		"cnt": "112"
	},
	{
		"airline": "XE",
		"airport1": "DTW",
		"airport2": "IAD",
		"cnt": "24"
	},
	{
		"airline": "XE",
		"airport1": "COS",
		"airport2": "ORD",
		"cnt": "1"
	},
	{
		"airline": "XE",
		"airport1": "GSO",
		"airport2": "IAD",
		"cnt": "42"
	},
	{
		"airline": "XE",
		"airport1": "GRR",
		"airport2": "CLE",
		"cnt": "150"
	},
	{
		"airline": "XE",
		"airport1": "MIA",
		"airport2": "CLE",
		"cnt": "20"
	},
	{
		"airline": "XE",
		"airport1": "ORF",
		"airport2": "ORD",
		"cnt": "80"
	},
	{
		"airline": "XE",
		"airport1": "DSM",
		"airport2": "DEN",
		"cnt": "25"
	},
	{
		"airline": "XE",
		"airport1": "DRO",
		"airport2": "DEN",
		"cnt": "49"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CLT",
		"cnt": "266"
	},
	{
		"airline": "XE",
		"airport1": "GSP",
		"airport2": "IAD",
		"cnt": "68"
	},
	{
		"airline": "XE",
		"airport1": "ROA",
		"airport2": "ORD",
		"cnt": "73"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "BNA",
		"cnt": "179"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "STL",
		"cnt": "52"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "SYR",
		"cnt": "111"
	},
	{
		"airline": "XE",
		"airport1": "BDL",
		"airport2": "CLE",
		"cnt": "4"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MLU",
		"cnt": "23"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "CID",
		"cnt": "49"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "MSN",
		"cnt": "56"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "DCA",
		"cnt": "343"
	},
	{
		"airline": "XE",
		"airport1": "BUF",
		"airport2": "ORD",
		"cnt": "122"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "JAX",
		"cnt": "262"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "RAP",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "TUL",
		"cnt": "65"
	},
	{
		"airline": "XE",
		"airport1": "BWI",
		"airport2": "ORD",
		"cnt": "114"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "BTR",
		"cnt": "237"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "SAV",
		"cnt": "70"
	},
	{
		"airline": "XE",
		"airport1": "FAR",
		"airport2": "ORD",
		"cnt": "145"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "CVG",
		"cnt": "85"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "IAH",
		"cnt": "60"
	},
	{
		"airline": "XE",
		"airport1": "MHT",
		"airport2": "CLE",
		"cnt": "134"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "ORF",
		"cnt": "112"
	},
	{
		"airline": "XE",
		"airport1": "BTV",
		"airport2": "ORD",
		"cnt": "174"
	},
	{
		"airline": "XE",
		"airport1": "MEM",
		"airport2": "EWR",
		"cnt": "96"
	},
	{
		"airline": "XE",
		"airport1": "ALB",
		"airport2": "CLE",
		"cnt": "64"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "LGA",
		"cnt": "121"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "SAV",
		"cnt": "94"
	},
	{
		"airline": "XE",
		"airport1": "LNK",
		"airport2": "ORD",
		"cnt": "117"
	},
	{
		"airline": "XE",
		"airport1": "BRO",
		"airport2": "IAH",
		"cnt": "262"
	},
	{
		"airline": "XE",
		"airport1": "FSD",
		"airport2": "ORD",
		"cnt": "232"
	},
	{
		"airline": "XE",
		"airport1": "SDF",
		"airport2": "CLE",
		"cnt": "71"
	},
	{
		"airline": "XE",
		"airport1": "ORF",
		"airport2": "EWR",
		"cnt": "84"
	},
	{
		"airline": "XE",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "11"
	},
	{
		"airline": "XE",
		"airport1": "BUF",
		"airport2": "CLE",
		"cnt": "46"
	},
	{
		"airline": "XE",
		"airport1": "MYR",
		"airport2": "EWR",
		"cnt": "40"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "SDF",
		"cnt": "144"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MTJ",
		"cnt": "16"
	},
	{
		"airline": "XE",
		"airport1": "MSP",
		"airport2": "EWR",
		"cnt": "220"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "PIT",
		"cnt": "30"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "RDU",
		"cnt": "138"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "SBN",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "LEX",
		"airport2": "IAH",
		"cnt": "92"
	},
	{
		"airline": "XE",
		"airport1": "CHS",
		"airport2": "IAD",
		"cnt": "123"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "OKC",
		"cnt": "284"
	},
	{
		"airline": "XE",
		"airport1": "TYS",
		"airport2": "IAD",
		"cnt": "140"
	},
	{
		"airline": "XE",
		"airport1": "TYS",
		"airport2": "IAH",
		"cnt": "163"
	},
	{
		"airline": "XE",
		"airport1": "CRW",
		"airport2": "ORD",
		"cnt": "98"
	},
	{
		"airline": "XE",
		"airport1": "BDL",
		"airport2": "EWR",
		"cnt": "27"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "ATL",
		"cnt": "134"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "DAY",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "GRR",
		"cnt": "52"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "MTJ",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "TPA",
		"cnt": "2"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "PVD",
		"cnt": "92"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "FAR",
		"cnt": "145"
	},
	{
		"airline": "XE",
		"airport1": "LEX",
		"airport2": "ORD",
		"cnt": "72"
	},
	{
		"airline": "XE",
		"airport1": "ROC",
		"airport2": "CLE",
		"cnt": "102"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "BIS",
		"cnt": "45"
	},
	{
		"airline": "XE",
		"airport1": "GPT",
		"airport2": "IAH",
		"cnt": "254"
	},
	{
		"airline": "XE",
		"airport1": "DAL",
		"airport2": "IAH",
		"cnt": "295"
	},
	{
		"airline": "XE",
		"airport1": "MDT",
		"airport2": "ORD",
		"cnt": "92"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "PHX",
		"cnt": "18"
	},
	{
		"airline": "XE",
		"airport1": "ATL",
		"airport2": "EWR",
		"cnt": "132"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "MSN",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "ICT",
		"cnt": "71"
	},
	{
		"airline": "XE",
		"airport1": "ICT",
		"airport2": "ORD",
		"cnt": "215"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "DCA",
		"cnt": "138"
	},
	{
		"airline": "XE",
		"airport1": "MEM",
		"airport2": "IAH",
		"cnt": "242"
	},
	{
		"airline": "XE",
		"airport1": "LBB",
		"airport2": "IAH",
		"cnt": "202"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "CLE",
		"cnt": "263"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "MFE",
		"cnt": "80"
	},
	{
		"airline": "XE",
		"airport1": "CMH",
		"airport2": "ORD",
		"cnt": "85"
	},
	{
		"airline": "XE",
		"airport1": "GSP",
		"airport2": "IAH",
		"cnt": "104"
	},
	{
		"airline": "XE",
		"airport1": "ORF",
		"airport2": "IAD",
		"cnt": "77"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "RIC",
		"cnt": "108"
	},
	{
		"airline": "XE",
		"airport1": "DAY",
		"airport2": "IAD",
		"cnt": "172"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "DAY",
		"cnt": "144"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "SGF",
		"cnt": "95"
	},
	{
		"airline": "XE",
		"airport1": "MCI",
		"airport2": "EWR",
		"cnt": "248"
	},
	{
		"airline": "XE",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "148"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "CLT",
		"cnt": "65"
	},
	{
		"airline": "XE",
		"airport1": "SAT",
		"airport2": "IAH",
		"cnt": "144"
	},
	{
		"airline": "XE",
		"airport1": "ATW",
		"airport2": "ORD",
		"cnt": "226"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "DAY",
		"cnt": "96"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "GRR",
		"cnt": "88"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "BTV",
		"cnt": "40"
	},
	{
		"airline": "XE",
		"airport1": "ELP",
		"airport2": "IAH",
		"cnt": "154"
	},
	{
		"airline": "XE",
		"airport1": "PHL",
		"airport2": "CLE",
		"cnt": "42"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "PIA",
		"cnt": "153"
	},
	{
		"airline": "XE",
		"airport1": "GJT",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CAE",
		"cnt": "94"
	},
	{
		"airline": "XE",
		"airport1": "SDF",
		"airport2": "DEN",
		"cnt": "12"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "TYS",
		"cnt": "190"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "FLL",
		"cnt": "4"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "PNS",
		"cnt": "54"
	},
	{
		"airline": "XE",
		"airport1": "CMH",
		"airport2": "EWR",
		"cnt": "169"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "RDU",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "IAD",
		"airport2": "ROA",
		"cnt": "27"
	},
	{
		"airline": "XE",
		"airport1": "DEN",
		"airport2": "LIT",
		"cnt": "100"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "CHS",
		"cnt": "120"
	},
	{
		"airline": "XE",
		"airport1": "TUL",
		"airport2": "ORD",
		"cnt": "162"
	},
	{
		"airline": "XE",
		"airport1": "STL",
		"airport2": "EWR",
		"cnt": "236"
	},
	{
		"airline": "XE",
		"airport1": "HSV",
		"airport2": "IAD",
		"cnt": "20"
	},
	{
		"airline": "XE",
		"airport1": "BUF",
		"airport2": "EWR",
		"cnt": "65"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "PNS",
		"cnt": "226"
	},
	{
		"airline": "XE",
		"airport1": "RIC",
		"airport2": "EWR",
		"cnt": "248"
	},
	{
		"airline": "XE",
		"airport1": "OMA",
		"airport2": "FSD",
		"cnt": "1"
	},
	{
		"airline": "XE",
		"airport1": "ALB",
		"airport2": "IAD",
		"cnt": "59"
	},
	{
		"airline": "XE",
		"airport1": "JAN",
		"airport2": "IAH",
		"cnt": "227"
	},
	{
		"airline": "XE",
		"airport1": "MKE",
		"airport2": "IAH",
		"cnt": "189"
	},
	{
		"airline": "XE",
		"airport1": "CID",
		"airport2": "ORD",
		"cnt": "45"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "SYR",
		"cnt": "113"
	},
	{
		"airline": "XE",
		"airport1": "SLC",
		"airport2": "IAH",
		"cnt": "14"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "RDU",
		"cnt": "22"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "PVD",
		"cnt": "12"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "XNA",
		"cnt": "169"
	},
	{
		"airline": "XE",
		"airport1": "AUS",
		"airport2": "IAH",
		"cnt": "114"
	},
	{
		"airline": "XE",
		"airport1": "OMA",
		"airport2": "ORD",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "CLT",
		"airport2": "ORD",
		"cnt": "8"
	},
	{
		"airline": "XE",
		"airport1": "OKC",
		"airport2": "EWR",
		"cnt": "48"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "LFT",
		"cnt": "382"
	},
	{
		"airline": "XE",
		"airport1": "GSO",
		"airport2": "ORD",
		"cnt": "63"
	},
	{
		"airline": "XE",
		"airport1": "BPT",
		"airport2": "IAH",
		"cnt": "2"
	},
	{
		"airline": "XE",
		"airport1": "IAH",
		"airport2": "IND",
		"cnt": "139"
	},
	{
		"airline": "XE",
		"airport1": "BIS",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "XE",
		"airport1": "EWR",
		"airport2": "CVG",
		"cnt": "200"
	},
	{
		"airline": "XE",
		"airport1": "ORD",
		"airport2": "DSM",
		"cnt": "57"
	},
	{
		"airline": "XE",
		"airport1": "ICT",
		"airport2": "IAH",
		"cnt": "234"
	},
	{
		"airline": "XE",
		"airport1": "MKE",
		"airport2": "EWR",
		"cnt": "144"
	},
	{
		"airline": "XE",
		"airport1": "CLE",
		"airport2": "RIC",
		"cnt": "134"
	},
	{
		"airline": "XE",
		"airport1": "CMH",
		"airport2": "IAD",
		"cnt": "90"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "PBI",
		"cnt": "272"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "SFO",
		"cnt": "204"
	},
	{
		"airline": "B6",
		"airport1": "BUR",
		"airport2": "JFK",
		"cnt": "108"
	},
	{
		"airline": "B6",
		"airport1": "JAX",
		"airport2": "JFK",
		"cnt": "145"
	},
	{
		"airline": "B6",
		"airport1": "BUF",
		"airport2": "RSW",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "HPN",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "SJU",
		"cnt": "135"
	},
	{
		"airline": "B6",
		"airport1": "PHX",
		"airport2": "LGB",
		"cnt": "1"
	},
	{
		"airline": "B6",
		"airport1": "IAD",
		"airport2": "LGB",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "AUS",
		"airport2": "JFK",
		"cnt": "123"
	},
	{
		"airline": "B6",
		"airport1": "EWR",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "OAK",
		"cnt": "69"
	},
	{
		"airline": "B6",
		"airport1": "BDL",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "EWR",
		"airport2": "PBI",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "IAD",
		"airport2": "OAK",
		"cnt": "24"
	},
	{
		"airline": "B6",
		"airport1": "EWR",
		"airport2": "FLL",
		"cnt": "280"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "RSW",
		"cnt": "324"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "PDX",
		"cnt": "24"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BQN",
		"airport2": "JFK",
		"cnt": "81"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "SFO",
		"cnt": "104"
	},
	{
		"airline": "B6",
		"airport1": "MCO",
		"airport2": "RIC",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "LAS",
		"airport2": "LGB",
		"cnt": "264"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "PDX",
		"cnt": "106"
	},
	{
		"airline": "B6",
		"airport1": "AUS",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "LGB",
		"cnt": "50"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "IAD",
		"cnt": "286"
	},
	{
		"airline": "B6",
		"airport1": "MCO",
		"airport2": "PSE",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "BWI",
		"cnt": "246"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "HPN",
		"cnt": "168"
	},
	{
		"airline": "B6",
		"airport1": "DEN",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "CLT",
		"cnt": "121"
	},
	{
		"airline": "B6",
		"airport1": "BUR",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "MCO",
		"cnt": "470"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SAN",
		"cnt": "104"
	},
	{
		"airline": "B6",
		"airport1": "HPN",
		"airport2": "MCO",
		"cnt": "216"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "SEA",
		"cnt": "152"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SYR",
		"cnt": "189"
	},
	{
		"airline": "B6",
		"airport1": "MCO",
		"airport2": "SWF",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "RIC",
		"cnt": "104"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "SMF",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "PWM",
		"cnt": "167"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "JAX",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "OAK",
		"cnt": "169"
	},
	{
		"airline": "B6",
		"airport1": "IAD",
		"airport2": "JFK",
		"cnt": "103"
	},
	{
		"airline": "B6",
		"airport1": "LGA",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "RIC",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SFO",
		"cnt": "92"
	},
	{
		"airline": "B6",
		"airport1": "DCA",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "DCA",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "HOU",
		"airport2": "JFK",
		"cnt": "98"
	},
	{
		"airline": "B6",
		"airport1": "AUS",
		"airport2": "BOS",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "MCO",
		"airport2": "PWM",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "BUF",
		"cnt": "124"
	},
	{
		"airline": "B6",
		"airport1": "AUS",
		"airport2": "LGB",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "SJC",
		"cnt": "34"
	},
	{
		"airline": "B6",
		"airport1": "BTV",
		"airport2": "JFK",
		"cnt": "200"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "SJU",
		"cnt": "135"
	},
	{
		"airline": "B6",
		"airport1": "MCO",
		"airport2": "SYR",
		"cnt": "80"
	},
	{
		"airline": "B6",
		"airport1": "LGA",
		"airport2": "PBI",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "PIT",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "JFK",
		"cnt": "379"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "LGB",
		"cnt": "100"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "MSY",
		"cnt": "46"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "ORD",
		"cnt": "108"
	},
	{
		"airline": "B6",
		"airport1": "PSE",
		"airport2": "JFK",
		"cnt": "46"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "SRQ",
		"cnt": "60"
	},
	{
		"airline": "B6",
		"airport1": "BDL",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "HPN",
		"airport2": "RSW",
		"cnt": "101"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "LGA",
		"cnt": "278"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "DEN",
		"cnt": "88"
	},
	{
		"airline": "B6",
		"airport1": "EWR",
		"airport2": "MCO",
		"cnt": "280"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "MSY",
		"cnt": "147"
	},
	{
		"airline": "B6",
		"airport1": "BUF",
		"airport2": "MCO",
		"cnt": "80"
	},
	{
		"airline": "B6",
		"airport1": "AUS",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "BQN",
		"airport2": "MCO",
		"cnt": "46"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "ORD",
		"cnt": "148"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "RDU",
		"cnt": "147"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "PHX",
		"cnt": "88"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "TPA",
		"cnt": "235"
	},
	{
		"airline": "B6",
		"airport1": "BUF",
		"airport2": "JFK",
		"cnt": "368"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "JFK",
		"cnt": "522"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "PIT",
		"cnt": "128"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "LGB",
		"cnt": "35"
	},
	{
		"airline": "B6",
		"airport1": "BUF",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SMF",
		"cnt": "32"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "TPA",
		"cnt": "260"
	},
	{
		"airline": "B6",
		"airport1": "AUS",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "ROC",
		"cnt": "184"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "IAD",
		"cnt": "124"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "SEA",
		"cnt": "48"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SEA",
		"cnt": "44"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "DCA",
		"cnt": "376"
	},
	{
		"airline": "B6",
		"airport1": "IAD",
		"airport2": "MCO",
		"cnt": "160"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "LAS",
		"cnt": "184"
	},
	{
		"airline": "B6",
		"airport1": "CLT",
		"airport2": "JFK",
		"cnt": "147"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "SLC",
		"cnt": "168"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "LAX",
		"cnt": "148"
	},
	{
		"airline": "B6",
		"airport1": "BTV",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "MCO",
		"airport2": "SJU",
		"cnt": "259"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "LAX",
		"cnt": "104"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "MCO",
		"cnt": "388"
	},
	{
		"airline": "B6",
		"airport1": "LGB",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SRQ",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "SFO",
		"cnt": "32"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "FLL",
		"cnt": "360"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SJC",
		"cnt": "40"
	},
	{
		"airline": "B6",
		"airport1": "FLL",
		"airport2": "SWF",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "RSW",
		"cnt": "276"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "PBI",
		"cnt": "408"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "B6",
		"airport1": "HPN",
		"airport2": "PBI",
		"cnt": "172"
	},
	{
		"airline": "B6",
		"airport1": "EWR",
		"airport2": "RSW",
		"cnt": "112"
	},
	{
		"airline": "B6",
		"airport1": "JFK",
		"airport2": "SJU",
		"cnt": "258"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "RDU",
		"cnt": "216"
	},
	{
		"airline": "B6",
		"airport1": "BOS",
		"airport2": "LAS",
		"cnt": "72"
	},
	{
		"airline": "MQ",
		"airport1": "IND",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "LGA",
		"airport2": "ATL",
		"cnt": "368"
	},
	{
		"airline": "MQ",
		"airport1": "LAX",
		"airport2": "FAT",
		"cnt": "264"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MOB",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "MQT",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "BOS",
		"airport2": "LGA",
		"cnt": "350"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "CID",
		"cnt": "142"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "OKC",
		"cnt": "214"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "MDT",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MGM",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CHS",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DAY",
		"airport2": "ORD",
		"cnt": "158"
	},
	{
		"airline": "MQ",
		"airport1": "CLE",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "XNA",
		"airport2": "DFW",
		"cnt": "387"
	},
	{
		"airline": "MQ",
		"airport1": "JFK",
		"airport2": "BOS",
		"cnt": "280"
	},
	{
		"airline": "MQ",
		"airport1": "FAY",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "MEM",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "CLE",
		"airport2": "DFW",
		"cnt": "224"
	},
	{
		"airline": "MQ",
		"airport1": "GSO",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "MIA",
		"airport2": "CMH",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "ROC",
		"cnt": "214"
	},
	{
		"airline": "MQ",
		"airport1": "ELP",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "GPT",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DCA",
		"airport2": "RDU",
		"cnt": "382"
	},
	{
		"airline": "MQ",
		"airport1": "JFK",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "CLE",
		"airport2": "ORD",
		"cnt": "314"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "HOU",
		"cnt": "372"
	},
	{
		"airline": "MQ",
		"airport1": "BMI",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "GRB",
		"airport2": "DFW",
		"cnt": "2"
	},
	{
		"airline": "MQ",
		"airport1": "SAN",
		"airport2": "LAX",
		"cnt": "656"
	},
	{
		"airline": "MQ",
		"airport1": "CHA",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "ATL",
		"cnt": "370"
	},
	{
		"airline": "MQ",
		"airport1": "LBB",
		"airport2": "DFW",
		"cnt": "272"
	},
	{
		"airline": "MQ",
		"airport1": "ABE",
		"airport2": "ORD",
		"cnt": "158"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MLU",
		"cnt": "18"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "BDL",
		"cnt": "214"
	},
	{
		"airline": "MQ",
		"airport1": "MTJ",
		"airport2": "DFW",
		"cnt": "40"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "AEX",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "SPS",
		"cnt": "50"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "LIT",
		"cnt": "220"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "BUF",
		"cnt": "214"
	},
	{
		"airline": "MQ",
		"airport1": "TXK",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "FWA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "BHM",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "LAX",
		"airport2": "DEN",
		"cnt": "224"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "MSP",
		"cnt": "268"
	},
	{
		"airline": "MQ",
		"airport1": "LGA",
		"airport2": "DTW",
		"cnt": "258"
	},
	{
		"airline": "MQ",
		"airport1": "ORF",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "AZO",
		"airport2": "ORD",
		"cnt": "166"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "FNT",
		"cnt": "34"
	},
	{
		"airline": "MQ",
		"airport1": "BWI",
		"airport2": "ORD",
		"cnt": "213"
	},
	{
		"airline": "MQ",
		"airport1": "PIT",
		"airport2": "ORD",
		"cnt": "268"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "PNS",
		"cnt": "16"
	},
	{
		"airline": "MQ",
		"airport1": "CHS",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "MKE",
		"airport2": "DFW",
		"cnt": "274"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "MTJ",
		"cnt": "8"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "HDN",
		"cnt": "8"
	},
	{
		"airline": "MQ",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "166"
	},
	{
		"airline": "MQ",
		"airport1": "SGF",
		"airport2": "ORD",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "BNA",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "PNS",
		"cnt": "276"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "LIT",
		"cnt": "550"
	},
	{
		"airline": "MQ",
		"airport1": "LAX",
		"airport2": "SJC",
		"cnt": "328"
	},
	{
		"airline": "MQ",
		"airport1": "TVC",
		"airport2": "ORD",
		"cnt": "104"
	},
	{
		"airline": "MQ",
		"airport1": "MSN",
		"airport2": "ORD",
		"cnt": "114"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "TYR",
		"cnt": "110"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MAF",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "GRR",
		"airport2": "ORD",
		"cnt": "104"
	},
	{
		"airline": "MQ",
		"airport1": "SHV",
		"airport2": "DFW",
		"cnt": "156"
	},
	{
		"airline": "MQ",
		"airport1": "BNA",
		"airport2": "LGA",
		"cnt": "110"
	},
	{
		"airline": "MQ",
		"airport1": "LEX",
		"airport2": "DFW",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "MQT",
		"airport2": "TVC",
		"cnt": "48"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "CMI",
		"cnt": "306"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "CMH",
		"cnt": "509"
	},
	{
		"airline": "MQ",
		"airport1": "RNO",
		"airport2": "LAX",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "GRB",
		"airport2": "MQT",
		"cnt": "48"
	},
	{
		"airline": "MQ",
		"airport1": "CMH",
		"airport2": "JFK",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "LEX",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "CVG",
		"airport2": "JFK",
		"cnt": "57"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "XNA",
		"cnt": "340"
	},
	{
		"airline": "MQ",
		"airport1": "ATL",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "CHA",
		"cnt": "104"
	},
	{
		"airline": "MQ",
		"airport1": "IAH",
		"airport2": "ORD",
		"cnt": "220"
	},
	{
		"airline": "MQ",
		"airport1": "RDU",
		"airport2": "JFK",
		"cnt": "224"
	},
	{
		"airline": "MQ",
		"airport1": "MKE",
		"airport2": "ORD",
		"cnt": "34"
	},
	{
		"airline": "MQ",
		"airport1": "CRW",
		"airport2": "ORD",
		"cnt": "104"
	},
	{
		"airline": "MQ",
		"airport1": "ICT",
		"airport2": "ORD",
		"cnt": "164"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "RAP",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "AVP",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "PIA",
		"cnt": "150"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CYS",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "AGS",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "LAX",
		"airport2": "SAF",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "JAN",
		"cnt": "440"
	},
	{
		"airline": "MQ",
		"airport1": "EWR",
		"airport2": "ORD",
		"cnt": "208"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "JFK",
		"cnt": "39"
	},
	{
		"airline": "MQ",
		"airport1": "DCA",
		"airport2": "ORD",
		"cnt": "149"
	},
	{
		"airline": "MQ",
		"airport1": "CLL",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "RIC",
		"cnt": "252"
	},
	{
		"airline": "MQ",
		"airport1": "LSE",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "CMI",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "RDU",
		"airport2": "LGA",
		"cnt": "479"
	},
	{
		"airline": "MQ",
		"airport1": "PIT",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "LFT",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "EVV",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "GSP",
		"airport2": "DFW",
		"cnt": "216"
	},
	{
		"airline": "MQ",
		"airport1": "MIA",
		"airport2": "JAX",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "BTR",
		"cnt": "438"
	},
	{
		"airline": "MQ",
		"airport1": "CVG",
		"airport2": "DFW",
		"cnt": "273"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "DBQ",
		"cnt": "48"
	},
	{
		"airline": "MQ",
		"airport1": "TYS",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "IND",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "SAT",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "FAR",
		"airport2": "ORD",
		"cnt": "158"
	},
	{
		"airline": "MQ",
		"airport1": "CVG",
		"airport2": "ORD",
		"cnt": "262"
	},
	{
		"airline": "MQ",
		"airport1": "GGG",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "TUL",
		"airport2": "DFW",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "LGA",
		"airport2": "CLE",
		"cnt": "156"
	},
	{
		"airline": "MQ",
		"airport1": "BNA",
		"airport2": "ORD",
		"cnt": "379"
	},
	{
		"airline": "MQ",
		"airport1": "JFK",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "RDU",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "FSD",
		"airport2": "ORD",
		"cnt": "158"
	},
	{
		"airline": "MQ",
		"airport1": "JAX",
		"airport2": "ORD",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MHK",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CMH",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "RST",
		"airport2": "ORD",
		"cnt": "110"
	},
	{
		"airline": "MQ",
		"airport1": "TLH",
		"airport2": "MIA",
		"cnt": "144"
	},
	{
		"airline": "MQ",
		"airport1": "GJT",
		"airport2": "DFW",
		"cnt": "150"
	},
	{
		"airline": "MQ",
		"airport1": "MHK",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "ROW",
		"airport2": "DFW",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "DTW",
		"cnt": "390"
	},
	{
		"airline": "MQ",
		"airport1": "GRR",
		"airport2": "DFW",
		"cnt": "148"
	},
	{
		"airline": "MQ",
		"airport1": "LCH",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "MEM",
		"airport2": "ORD",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "SBA",
		"airport2": "LAX",
		"cnt": "272"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "DEN",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "SAV",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "EVV",
		"airport2": "ORD",
		"cnt": "166"
	},
	{
		"airline": "MQ",
		"airport1": "CVG",
		"airport2": "MIA",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "GUC",
		"cnt": "116"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "ABQ",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "CLT",
		"cnt": "212"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "VPS",
		"cnt": "276"
	},
	{
		"airline": "MQ",
		"airport1": "TRI",
		"airport2": "ORD",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "FSM",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "ACT",
		"airport2": "DFW",
		"cnt": "100"
	},
	{
		"airline": "MQ",
		"airport1": "PIT",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "PNS",
		"airport2": "MIA",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "FSD",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "MSP",
		"airport2": "LGA",
		"cnt": "216"
	},
	{
		"airline": "MQ",
		"airport1": "AMA",
		"airport2": "DFW",
		"cnt": "179"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CRP",
		"cnt": "434"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "HSV",
		"cnt": "104"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "OMA",
		"cnt": "220"
	},
	{
		"airline": "MQ",
		"airport1": "TYS",
		"airport2": "ORD",
		"cnt": "206"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "LRD",
		"cnt": "216"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "ABI",
		"cnt": "382"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "AUS",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "MIA",
		"airport2": "RIC",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "CLT",
		"airport2": "MIA",
		"cnt": "224"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CAE",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "MLI",
		"airport2": "ORD",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "TOL",
		"airport2": "ORD",
		"cnt": "48"
	},
	{
		"airline": "MQ",
		"airport1": "DCA",
		"airport2": "BNA",
		"cnt": "253"
	},
	{
		"airline": "MQ",
		"airport1": "DSM",
		"airport2": "DFW",
		"cnt": "326"
	},
	{
		"airline": "MQ",
		"airport1": "JFK",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "SAF",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "BRO",
		"airport2": "DFW",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "GRK",
		"cnt": "234"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CID",
		"cnt": "264"
	},
	{
		"airline": "MQ",
		"airport1": "JFK",
		"airport2": "CLE",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "GRB",
		"cnt": "216"
	},
	{
		"airline": "MQ",
		"airport1": "CLT",
		"airport2": "LGA",
		"cnt": "270"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "TLH",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "TUL",
		"airport2": "ORD",
		"cnt": "156"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "DAY",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "BMI",
		"cnt": "56"
	},
	{
		"airline": "MQ",
		"airport1": "LGA",
		"airport2": "XNA",
		"cnt": "120"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "SLC",
		"cnt": "168"
	},
	{
		"airline": "MQ",
		"airport1": "FWA",
		"airport2": "ORD",
		"cnt": "148"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MLI",
		"cnt": "104"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "CSG",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "MSN",
		"cnt": "150"
	},
	{
		"airline": "MQ",
		"airport1": "LAX",
		"airport2": "MRY",
		"cnt": "160"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "SYR",
		"cnt": "206"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "IND",
		"cnt": "236"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "TYS",
		"cnt": "269"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "PHL",
		"cnt": "260"
	},
	{
		"airline": "MQ",
		"airport1": "MIA",
		"airport2": "SDF",
		"cnt": "112"
	},
	{
		"airline": "MQ",
		"airport1": "LGA",
		"airport2": "CMH",
		"cnt": "248"
	},
	{
		"airline": "MQ",
		"airport1": "SGF",
		"airport2": "DFW",
		"cnt": "434"
	},
	{
		"airline": "MQ",
		"airport1": "DCA",
		"airport2": "JFK",
		"cnt": "280"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "SPI",
		"cnt": "98"
	},
	{
		"airline": "MQ",
		"airport1": "MSY",
		"airport2": "ORD",
		"cnt": "19"
	},
	{
		"airline": "MQ",
		"airport1": "ORD",
		"airport2": "DSM",
		"cnt": "254"
	},
	{
		"airline": "MQ",
		"airport1": "CRW",
		"airport2": "LGA",
		"cnt": "48"
	},
	{
		"airline": "MQ",
		"airport1": "DFW",
		"airport2": "GSO",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "OKC",
		"airport2": "STL",
		"cnt": "90"
	},
	{
		"airline": "WN",
		"airport1": "SDF",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "BWI",
		"cnt": "364"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "MHT",
		"cnt": "412"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SEA",
		"cnt": "220"
	},
	{
		"airline": "WN",
		"airport1": "JAX",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "LAX",
		"cnt": "189"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "MSP",
		"cnt": "210"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "CLE",
		"cnt": "154"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "MSY",
		"cnt": "108"
	},
	{
		"airline": "WN",
		"airport1": "OKC",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SAN",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "PIT",
		"cnt": "286"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "SAN",
		"cnt": "644"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "LBB",
		"cnt": "312"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SAT",
		"cnt": "100"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "ORF",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "PDX",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "PHL",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "RNO",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "RSW",
		"cnt": "148"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "PHX",
		"cnt": "476"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "TPA",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "MDW",
		"cnt": "357"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "MCI",
		"cnt": "521"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "RDU",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "JAN",
		"airport2": "MDW",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "LAX",
		"cnt": "101"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "LAS",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "DTW",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "CLE",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "JAN",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "OMA",
		"cnt": "259"
	},
	{
		"airline": "WN",
		"airport1": "MSY",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "AMA",
		"airport2": "DAL",
		"cnt": "321"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "RSW",
		"cnt": "36"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "LAX",
		"cnt": "419"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "TPA",
		"cnt": "326"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SNA",
		"cnt": "427"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "GEG",
		"cnt": "148"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "PVD",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "LAS",
		"cnt": "486"
	},
	{
		"airline": "WN",
		"airport1": "ALB",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "GEG",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SLC",
		"cnt": "368"
	},
	{
		"airline": "WN",
		"airport1": "ONT",
		"airport2": "PHX",
		"cnt": "414"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "HOU",
		"cnt": "256"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MCI",
		"cnt": "215"
	},
	{
		"airline": "WN",
		"airport1": "RNO",
		"airport2": "SJC",
		"cnt": "157"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "MDW",
		"cnt": "372"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "MDW",
		"cnt": "312"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "PHX",
		"cnt": "759"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "LAX",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "OAK",
		"cnt": "100"
	},
	{
		"airline": "WN",
		"airport1": "ALB",
		"airport2": "MDW",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "HOU",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "JAX",
		"cnt": "270"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "MSP",
		"cnt": "432"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "SAN",
		"airport2": "SMF",
		"cnt": "586"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "MCI",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "HOU",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "JAX",
		"cnt": "221"
	},
	{
		"airline": "WN",
		"airport1": "ISP",
		"airport2": "RSW",
		"cnt": "36"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "HOU",
		"cnt": "220"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "MDW",
		"cnt": "311"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "JAN",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SEA",
		"cnt": "102"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "MCO",
		"cnt": "184"
	},
	{
		"airline": "WN",
		"airport1": "MKE",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "SEA",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "LIT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "TPA",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "MCI",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "MCO",
		"cnt": "392"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "HRL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "RDU",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "PBI",
		"airport2": "PHL",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "DEN",
		"cnt": "156"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "GEG",
		"cnt": "108"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "SMF",
		"cnt": "422"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "RDU",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "TUS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "IND",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "SAT",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "PDX",
		"cnt": "48"
	},
	{
		"airline": "WN",
		"airport1": "ALB",
		"airport2": "FLL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "PHX",
		"cnt": "456"
	},
	{
		"airline": "WN",
		"airport1": "AMA",
		"airport2": "DEN",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "CRP",
		"airport2": "HOU",
		"cnt": "248"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SEA",
		"cnt": "165"
	},
	{
		"airline": "WN",
		"airport1": "SAN",
		"airport2": "SAT",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "HOU",
		"cnt": "1286"
	},
	{
		"airline": "WN",
		"airport1": "CMH",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "RNO",
		"airport2": "SEA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "SDF",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "PDX",
		"airport2": "SLC",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "ELP",
		"airport2": "HOU",
		"cnt": "156"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "TPA",
		"cnt": "92"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "STL",
		"cnt": "413"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "ONT",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "GEG",
		"airport2": "SEA",
		"cnt": "144"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "MDW",
		"cnt": "488"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "PVD",
		"cnt": "120"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "MCO",
		"cnt": "275"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SFO",
		"cnt": "109"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "ELP",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "PDX",
		"airport2": "PHX",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "RSW",
		"cnt": "224"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ONT",
		"airport2": "SMF",
		"cnt": "415"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "PIT",
		"cnt": "156"
	},
	{
		"airline": "WN",
		"airport1": "BUR",
		"airport2": "SMF",
		"cnt": "405"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "SLC",
		"cnt": "208"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "STL",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SNA",
		"cnt": "157"
	},
	{
		"airline": "WN",
		"airport1": "ELP",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "MHT",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "ELP",
		"airport2": "SAT",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "RDU",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "MAF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "LIT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "PIT",
		"cnt": "120"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "LBB",
		"cnt": "94"
	},
	{
		"airline": "WN",
		"airport1": "CMH",
		"airport2": "STL",
		"cnt": "96"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "MSY",
		"cnt": "101"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "JAN",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "PBI",
		"cnt": "204"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "TPA",
		"cnt": "426"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "DAL",
		"cnt": "159"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "JAX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "FLL",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "ONT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "SMF",
		"airport2": "SNA",
		"cnt": "326"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "BUR",
		"airport2": "SJC",
		"cnt": "410"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "PVD",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "OAK",
		"cnt": "439"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "SEA",
		"cnt": "303"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "RNO",
		"cnt": "157"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "MSY",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "PHL",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "BOS",
		"airport2": "MDW",
		"cnt": "265"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MKE",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "STL",
		"cnt": "244"
	},
	{
		"airline": "WN",
		"airport1": "SEA",
		"airport2": "SLC",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "PHX",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BUR",
		"airport2": "LAS",
		"cnt": "596"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SMF",
		"cnt": "303"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "JAX",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "STL",
		"cnt": "204"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "TPA",
		"cnt": "215"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SFO",
		"cnt": "379"
	},
	{
		"airline": "WN",
		"airport1": "MSP",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "PIT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "FLL",
		"cnt": "252"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "RDU",
		"cnt": "312"
	},
	{
		"airline": "WN",
		"airport1": "SFO",
		"airport2": "SNA",
		"cnt": "320"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "CMH",
		"cnt": "206"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "LBB",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MHT",
		"airport2": "PHL",
		"cnt": "203"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "OAK",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ISP",
		"airport2": "PBI",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "RSW",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "MDW",
		"cnt": "480"
	},
	{
		"airline": "WN",
		"airport1": "BUR",
		"airport2": "PHX",
		"cnt": "417"
	},
	{
		"airline": "WN",
		"airport1": "MHT",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "SAN",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SJC",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SJC",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "MCO",
		"cnt": "270"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "MCI",
		"cnt": "159"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "PHX",
		"cnt": "205"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "STL",
		"cnt": "464"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "SEA",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "RDU",
		"airport2": "TPA",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "PHL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MHT",
		"airport2": "TPA",
		"cnt": "113"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "JAX",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SMF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "DTW",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "CLE",
		"airport2": "MDW",
		"cnt": "320"
	},
	{
		"airline": "WN",
		"airport1": "CMH",
		"airport2": "MDW",
		"cnt": "311"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "SAN",
		"airport2": "SFO",
		"cnt": "464"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "OKC",
		"cnt": "206"
	},
	{
		"airline": "WN",
		"airport1": "DTW",
		"airport2": "STL",
		"cnt": "100"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "OAK",
		"cnt": "106"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "RNO",
		"cnt": "157"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "IND",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "MAF",
		"cnt": "310"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "PIT",
		"cnt": "213"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "OMA",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "OMA",
		"airport2": "STL",
		"cnt": "147"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "LBB",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ALB",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "RNO",
		"airport2": "SAN",
		"cnt": "109"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "MKE",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "PHX",
		"cnt": "206"
	},
	{
		"airline": "WN",
		"airport1": "PDX",
		"airport2": "RNO",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "LIT",
		"cnt": "316"
	},
	{
		"airline": "WN",
		"airport1": "OMA",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "MDW",
		"cnt": "100"
	},
	{
		"airline": "WN",
		"airport1": "RNO",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "SAN",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SLC",
		"cnt": "108"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "SAT",
		"cnt": "709"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SNA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "MCI",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "MAF",
		"cnt": "99"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "RNO",
		"cnt": "89"
	},
	{
		"airline": "WN",
		"airport1": "SAN",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SFO",
		"cnt": "208"
	},
	{
		"airline": "WN",
		"airport1": "BOS",
		"airport2": "DEN",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "SLC",
		"cnt": "165"
	},
	{
		"airline": "WN",
		"airport1": "STL",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SLC",
		"cnt": "361"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "MSY",
		"cnt": "521"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "ORF",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "OAK",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MDW",
		"cnt": "439"
	},
	{
		"airline": "WN",
		"airport1": "MSY",
		"airport2": "TPA",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "SAN",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "SAN",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SEA",
		"cnt": "213"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "SAT",
		"cnt": "257"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "IAD",
		"airport2": "MDW",
		"cnt": "304"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "LAS",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "GEG",
		"airport2": "OAK",
		"cnt": "107"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "ORF",
		"cnt": "208"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "PDX",
		"cnt": "300"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "JAX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BOS",
		"airport2": "BWI",
		"cnt": "417"
	},
	{
		"airline": "WN",
		"airport1": "ISP",
		"airport2": "TPA",
		"cnt": "140"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "DTW",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "AMA",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "SAN",
		"cnt": "110"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "MSY",
		"cnt": "369"
	},
	{
		"airline": "WN",
		"airport1": "SEA",
		"airport2": "SMF",
		"cnt": "211"
	},
	{
		"airline": "WN",
		"airport1": "PIT",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "OAK",
		"cnt": "211"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "MKE",
		"cnt": "118"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "SAT",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SFO",
		"cnt": "257"
	},
	{
		"airline": "WN",
		"airport1": "HRL",
		"airport2": "SAT",
		"cnt": "96"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "ISP",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "OKC",
		"cnt": "109"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "MDW",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "CMH",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "PHX",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "MCI",
		"cnt": "267"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "MDW",
		"cnt": "224"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MSY",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "MCO",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "LAX",
		"cnt": "643"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "TUS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SMF",
		"cnt": "156"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "PHX",
		"cnt": "573"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "HOU",
		"cnt": "157"
	},
	{
		"airline": "WN",
		"airport1": "SAN",
		"airport2": "TUS",
		"cnt": "209"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "MSY",
		"cnt": "106"
	},
	{
		"airline": "WN",
		"airport1": "SDF",
		"airport2": "STL",
		"cnt": "97"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "TUS",
		"cnt": "109"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "OKC",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "TUL",
		"cnt": "156"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "ECP",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "TUS",
		"cnt": "267"
	},
	{
		"airline": "WN",
		"airport1": "BUR",
		"airport2": "OAK",
		"cnt": "680"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "PVD",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "LIT",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ECP",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "PVD",
		"cnt": "280"
	},
	{
		"airline": "WN",
		"airport1": "GEG",
		"airport2": "PDX",
		"cnt": "149"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "BWI",
		"cnt": "270"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SAT",
		"cnt": "160"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "MHT",
		"cnt": "159"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "BNA",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "LAS",
		"cnt": "263"
	},
	{
		"airline": "WN",
		"airport1": "SAN",
		"airport2": "SJC",
		"cnt": "479"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "DAL",
		"cnt": "610"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MHT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SNA",
		"cnt": "408"
	},
	{
		"airline": "WN",
		"airport1": "MSY",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "CMH",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "CMH",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "MAF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "STL",
		"cnt": "208"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "FLL",
		"cnt": "64"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "STL",
		"cnt": "203"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "DTW",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "TUS",
		"cnt": "271"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "PVD",
		"cnt": "211"
	},
	{
		"airline": "WN",
		"airport1": "IND",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "TUL",
		"cnt": "64"
	},
	{
		"airline": "WN",
		"airport1": "ELP",
		"airport2": "PHX",
		"cnt": "306"
	},
	{
		"airline": "WN",
		"airport1": "IND",
		"airport2": "MCI",
		"cnt": "101"
	},
	{
		"airline": "WN",
		"airport1": "BOS",
		"airport2": "STL",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "TUL",
		"cnt": "193"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "TPA",
		"cnt": "260"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "OKC",
		"cnt": "101"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "PDX",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LIT",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "BWI",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "SAT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ECP",
		"airport2": "HOU",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "BWI",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "BWI",
		"cnt": "382"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "OAK",
		"cnt": "101"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "MSY",
		"cnt": "224"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "SAN",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "DTW",
		"airport2": "MDW",
		"cnt": "315"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "STL",
		"cnt": "109"
	},
	{
		"airline": "WN",
		"airport1": "IND",
		"airport2": "MDW",
		"cnt": "159"
	},
	{
		"airline": "WN",
		"airport1": "GEG",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SMF",
		"cnt": "430"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "SEA",
		"cnt": "108"
	},
	{
		"airline": "WN",
		"airport1": "IND",
		"airport2": "PHX",
		"cnt": "100"
	},
	{
		"airline": "WN",
		"airport1": "PDX",
		"airport2": "SMF",
		"cnt": "314"
	},
	{
		"airline": "WN",
		"airport1": "ALB",
		"airport2": "BWI",
		"cnt": "251"
	},
	{
		"airline": "WN",
		"airport1": "ALB",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "OKC",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "MSY",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "MSP",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "PHL",
		"airport2": "RSW",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "IND",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "PHX",
		"cnt": "320"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "PVD",
		"cnt": "155"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "ELP",
		"cnt": "364"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "SFO",
		"cnt": "577"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "LAS",
		"cnt": "84"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SAN",
		"cnt": "622"
	},
	{
		"airline": "WN",
		"airport1": "PBI",
		"airport2": "TPA",
		"cnt": "201"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "DEN",
		"cnt": "159"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "PHL",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "SLC",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "BNA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "DEN",
		"cnt": "158"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "PHL",
		"cnt": "308"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "SJC",
		"cnt": "301"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "IAD",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "PHX",
		"cnt": "363"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "ONT",
		"cnt": "421"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "LIT",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BUF",
		"airport2": "MDW",
		"cnt": "166"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "SDF",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "HOU",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "SDF",
		"cnt": "207"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "CLE",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "SNA",
		"cnt": "371"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "LAS",
		"cnt": "216"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SLC",
		"cnt": "312"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "STL",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "LAX",
		"cnt": "208"
	},
	{
		"airline": "WN",
		"airport1": "CMH",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "ORF",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "OKC",
		"cnt": "256"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "RNO",
		"cnt": "546"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "PDX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LIT",
		"airport2": "MDW",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ISP",
		"airport2": "MCO",
		"cnt": "224"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "LGA",
		"cnt": "163"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "TPA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "ELP",
		"cnt": "198"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "HOU",
		"cnt": "205"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "SAT",
		"cnt": "96"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "OAK",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "MDW",
		"cnt": "109"
	},
	{
		"airline": "WN",
		"airport1": "OAK",
		"airport2": "ONT",
		"cnt": "419"
	},
	{
		"airline": "WN",
		"airport1": "BDL",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "RDU",
		"cnt": "200"
	},
	{
		"airline": "WN",
		"airport1": "STL",
		"airport2": "TUL",
		"cnt": "96"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SAT",
		"cnt": "216"
	},
	{
		"airline": "WN",
		"airport1": "SEA",
		"airport2": "SJC",
		"cnt": "101"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SAN",
		"cnt": "648"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "PVD",
		"cnt": "454"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "BWI",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "ELP",
		"airport2": "LAS",
		"cnt": "168"
	},
	{
		"airline": "WN",
		"airport1": "SJC",
		"airport2": "SNA",
		"cnt": "365"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "RNO",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ELP",
		"airport2": "LAX",
		"cnt": "137"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "DEN",
		"cnt": "207"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "SAT",
		"cnt": "103"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "OMA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "MCI",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "TPA",
		"cnt": "214"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "MKE",
		"cnt": "154"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "PIT",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "JAX",
		"airport2": "ORF",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "MDW",
		"cnt": "111"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "MDW",
		"cnt": "267"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "ECP",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "ISP",
		"cnt": "292"
	},
	{
		"airline": "WN",
		"airport1": "ABQ",
		"airport2": "DAL",
		"cnt": "412"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "RDU",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "BNA",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "MDW",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "PDX",
		"cnt": "153"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SAN",
		"cnt": "267"
	},
	{
		"airline": "WN",
		"airport1": "ISP",
		"airport2": "MDW",
		"cnt": "152"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "TPA",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "IND",
		"airport2": "LAS",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "STL",
		"cnt": "200"
	},
	{
		"airline": "WN",
		"airport1": "JAX",
		"airport2": "TPA",
		"cnt": "155"
	},
	{
		"airline": "WN",
		"airport1": "BWI",
		"airport2": "RSW",
		"cnt": "148"
	},
	{
		"airline": "WN",
		"airport1": "DEN",
		"airport2": "SAT",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "MCO",
		"airport2": "PHL",
		"cnt": "308"
	},
	{
		"airline": "WN",
		"airport1": "FLL",
		"airport2": "STL",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "LGA",
		"airport2": "MDW",
		"cnt": "267"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "MCO",
		"cnt": "219"
	},
	{
		"airline": "WN",
		"airport1": "BHM",
		"airport2": "LAS",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "AUS",
		"airport2": "SJC",
		"cnt": "104"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "OAK",
		"cnt": "739"
	},
	{
		"airline": "WN",
		"airport1": "MCI",
		"airport2": "PHX",
		"cnt": "167"
	},
	{
		"airline": "WN",
		"airport1": "LAS",
		"airport2": "SJC",
		"cnt": "432"
	},
	{
		"airline": "WN",
		"airport1": "LAX",
		"airport2": "SJC",
		"cnt": "518"
	},
	{
		"airline": "WN",
		"airport1": "PDX",
		"airport2": "SJC",
		"cnt": "200"
	},
	{
		"airline": "WN",
		"airport1": "MKE",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "STL",
		"cnt": "162"
	},
	{
		"airline": "WN",
		"airport1": "CLE",
		"airport2": "STL",
		"cnt": "48"
	},
	{
		"airline": "WN",
		"airport1": "DAL",
		"airport2": "TUL",
		"cnt": "256"
	},
	{
		"airline": "WN",
		"airport1": "BOI",
		"airport2": "RNO",
		"cnt": "105"
	},
	{
		"airline": "WN",
		"airport1": "BOS",
		"airport2": "PHL",
		"cnt": "416"
	},
	{
		"airline": "WN",
		"airport1": "HOU",
		"airport2": "HRL",
		"cnt": "358"
	},
	{
		"airline": "WN",
		"airport1": "BOS",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "WN",
		"airport1": "ONT",
		"airport2": "SJC",
		"cnt": "261"
	},
	{
		"airline": "WN",
		"airport1": "LIT",
		"airport2": "PIT",
		"cnt": "6"
	},
	{
		"airline": "WN",
		"airport1": "BNA",
		"airport2": "FLL",
		"cnt": "112"
	},
	{
		"airline": "WN",
		"airport1": "PHX",
		"airport2": "TUL",
		"cnt": "109"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "RDU",
		"cnt": "52"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "TLH",
		"cnt": "444"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "OKC",
		"cnt": "106"
	},
	{
		"airline": "EV",
		"airport1": "DSM",
		"airport2": "ATL",
		"cnt": "97"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "SAT",
		"cnt": "27"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "ROA",
		"cnt": "60"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "OMA",
		"cnt": "86"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "ROC",
		"cnt": "83"
	},
	{
		"airline": "EV",
		"airport1": "ABY",
		"airport2": "ATL",
		"cnt": "148"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CSG",
		"cnt": "212"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "GSP",
		"cnt": "17"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "ECP",
		"cnt": "101"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "GPT",
		"cnt": "136"
	},
	{
		"airline": "EV",
		"airport1": "BDL",
		"airport2": "DTW",
		"cnt": "54"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "BQK",
		"cnt": "140"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "LIT",
		"cnt": "104"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "JAN",
		"cnt": "356"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "GSP",
		"cnt": "332"
	},
	{
		"airline": "EV",
		"airport1": "DFW",
		"airport2": "DTW",
		"cnt": "38"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "TPA",
		"cnt": "52"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "ORD",
		"cnt": "17"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "ORF",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "JAX",
		"cnt": "71"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "IND",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MDT",
		"cnt": "214"
	},
	{
		"airline": "EV",
		"airport1": "OMA",
		"airport2": "ATL",
		"cnt": "185"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ECP",
		"cnt": "328"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "BMI",
		"cnt": "210"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "STL",
		"cnt": "26"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "PWM",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "SYR",
		"airport2": "ORD",
		"cnt": "8"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "GSO",
		"cnt": "248"
	},
	{
		"airline": "EV",
		"airport1": "AGS",
		"airport2": "ATL",
		"cnt": "512"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "TUL",
		"cnt": "102"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "IAD",
		"cnt": "20"
	},
	{
		"airline": "EV",
		"airport1": "CLT",
		"airport2": "DTW",
		"cnt": "24"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MOB",
		"cnt": "440"
	},
	{
		"airline": "EV",
		"airport1": "ROC",
		"airport2": "ORD",
		"cnt": "25"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MTJ",
		"cnt": "52"
	},
	{
		"airline": "EV",
		"airport1": "BTR",
		"airport2": "MEM",
		"cnt": "112"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "XNA",
		"cnt": "152"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "DCA",
		"cnt": "30"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "FWA",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "PNS",
		"cnt": "28"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "SWF",
		"cnt": "47"
	},
	{
		"airline": "EV",
		"airport1": "EVV",
		"airport2": "MEM",
		"cnt": "24"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CLE",
		"cnt": "176"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "PVD",
		"cnt": "8"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MGM",
		"cnt": "372"
	},
	{
		"airline": "EV",
		"airport1": "MFE",
		"airport2": "MEM",
		"cnt": "45"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "GTR",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "DCA",
		"airport2": "STL",
		"cnt": "152"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CLT",
		"cnt": "28"
	},
	{
		"airline": "EV",
		"airport1": "CAE",
		"airport2": "IAD",
		"cnt": "184"
	},
	{
		"airline": "EV",
		"airport1": "CAK",
		"airport2": "ATL",
		"cnt": "316"
	},
	{
		"airline": "EV",
		"airport1": "JAN",
		"airport2": "DTW",
		"cnt": "50"
	},
	{
		"airline": "EV",
		"airport1": "SAV",
		"airport2": "ORD",
		"cnt": "86"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ATW",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "SAV",
		"airport2": "IAD",
		"cnt": "48"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "EWR",
		"cnt": "92"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "BUF",
		"cnt": "10"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "MEM",
		"cnt": "1"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "LEX",
		"cnt": "346"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "PNS",
		"cnt": "69"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "SHV",
		"cnt": "256"
	},
	{
		"airline": "EV",
		"airport1": "LEX",
		"airport2": "DTW",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "SGF",
		"cnt": "147"
	},
	{
		"airline": "EV",
		"airport1": "CHA",
		"airport2": "DTW",
		"cnt": "23"
	},
	{
		"airline": "EV",
		"airport1": "SAV",
		"airport2": "ATL",
		"cnt": "128"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "PIT",
		"cnt": "12"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "DCA",
		"cnt": "46"
	},
	{
		"airline": "EV",
		"airport1": "CAE",
		"airport2": "ORD",
		"cnt": "108"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "HSV",
		"cnt": "466"
	},
	{
		"airline": "EV",
		"airport1": "CLE",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "FLL",
		"airport2": "TLH",
		"cnt": "52"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MHT",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "TRI",
		"cnt": "347"
	},
	{
		"airline": "EV",
		"airport1": "MSN",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "ABE",
		"airport2": "ATL",
		"cnt": "112"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "ORF",
		"cnt": "44"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "MCI",
		"cnt": "76"
	},
	{
		"airline": "EV",
		"airport1": "GSO",
		"airport2": "IAD",
		"cnt": "84"
	},
	{
		"airline": "EV",
		"airport1": "GSP",
		"airport2": "CVG",
		"cnt": "1"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "VLD",
		"cnt": "158"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "CMH",
		"cnt": "20"
	},
	{
		"airline": "EV",
		"airport1": "MLU",
		"airport2": "MEM",
		"cnt": "100"
	},
	{
		"airline": "EV",
		"airport1": "AEX",
		"airport2": "ATL",
		"cnt": "260"
	},
	{
		"airline": "EV",
		"airport1": "PIT",
		"airport2": "IAD",
		"cnt": "8"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "IAD",
		"cnt": "44"
	},
	{
		"airline": "EV",
		"airport1": "JAX",
		"airport2": "MEM",
		"cnt": "32"
	},
	{
		"airline": "EV",
		"airport1": "OMA",
		"airport2": "DTW",
		"cnt": "132"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "IAH",
		"cnt": "62"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "GRR",
		"cnt": "28"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "IAH",
		"cnt": "65"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "RDU",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "SGF",
		"airport2": "MEM",
		"cnt": "58"
	},
	{
		"airline": "EV",
		"airport1": "CHS",
		"airport2": "ORD",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "PIT",
		"airport2": "DFW",
		"cnt": "1"
	},
	{
		"airline": "EV",
		"airport1": "BOS",
		"airport2": "DTW",
		"cnt": "17"
	},
	{
		"airline": "EV",
		"airport1": "LIT",
		"airport2": "ATL",
		"cnt": "384"
	},
	{
		"airline": "EV",
		"airport1": "HSV",
		"airport2": "MEM",
		"cnt": "116"
	},
	{
		"airline": "EV",
		"airport1": "MCI",
		"airport2": "MEM",
		"cnt": "74"
	},
	{
		"airline": "EV",
		"airport1": "BWI",
		"airport2": "MEM",
		"cnt": "48"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MYR",
		"cnt": "262"
	},
	{
		"airline": "EV",
		"airport1": "CRW",
		"airport2": "ATL",
		"cnt": "259"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "EWR",
		"cnt": "46"
	},
	{
		"airline": "EV",
		"airport1": "ALB",
		"airport2": "ATL",
		"cnt": "61"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "JFK",
		"cnt": "224"
	},
	{
		"airline": "EV",
		"airport1": "GSP",
		"airport2": "IAD",
		"cnt": "24"
	},
	{
		"airline": "EV",
		"airport1": "BDL",
		"airport2": "DCA",
		"cnt": "88"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "GRK",
		"cnt": "112"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "GTR",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MSY",
		"cnt": "6"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "CLE",
		"cnt": "54"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "BWI",
		"cnt": "24"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "PIT",
		"cnt": "109"
	},
	{
		"airline": "EV",
		"airport1": "EWR",
		"airport2": "ATL",
		"cnt": "22"
	},
	{
		"airline": "EV",
		"airport1": "GSO",
		"airport2": "ORD",
		"cnt": "38"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "DFW",
		"cnt": "21"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "LGA",
		"cnt": "156"
	},
	{
		"airline": "EV",
		"airport1": "DCA",
		"airport2": "MSN",
		"cnt": "28"
	},
	{
		"airline": "EV",
		"airport1": "DEN",
		"airport2": "CVG",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "DAB",
		"cnt": "6"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "ORD",
		"cnt": "68"
	},
	{
		"airline": "EV",
		"airport1": "BTV",
		"airport2": "IAD",
		"cnt": "53"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "VPS",
		"cnt": "134"
	},
	{
		"airline": "EV",
		"airport1": "PIT",
		"airport2": "CVG",
		"cnt": "12"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "ALB",
		"cnt": "93"
	},
	{
		"airline": "EV",
		"airport1": "EWR",
		"airport2": "MEM",
		"cnt": "89"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "DAY",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "FNT",
		"cnt": "63"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "SHV",
		"cnt": "154"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "LFT",
		"cnt": "156"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "EVV",
		"cnt": "158"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "MOB",
		"cnt": "160"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "SBN",
		"cnt": "8"
	},
	{
		"airline": "EV",
		"airport1": "IND",
		"airport2": "DCA",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "BUF",
		"airport2": "IAD",
		"cnt": "71"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ORF",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "CLT",
		"airport2": "MEM",
		"cnt": "86"
	},
	{
		"airline": "EV",
		"airport1": "ORF",
		"airport2": "IAD",
		"cnt": "44"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "HPN",
		"cnt": "220"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "SDF",
		"cnt": "317"
	},
	{
		"airline": "EV",
		"airport1": "BOS",
		"airport2": "CVG",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "VPS",
		"airport2": "ATL",
		"cnt": "522"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "BTR",
		"cnt": "420"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "SBN",
		"cnt": "52"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "GRR",
		"cnt": "99"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "MHT",
		"cnt": "54"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "MHT",
		"cnt": "24"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "MLI",
		"cnt": "24"
	},
	{
		"airline": "EV",
		"airport1": "CHS",
		"airport2": "IAD",
		"cnt": "46"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "CLE",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ICT",
		"cnt": "116"
	},
	{
		"airline": "EV",
		"airport1": "DEN",
		"airport2": "MEM",
		"cnt": "64"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CAE",
		"cnt": "578"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "PHF",
		"cnt": "66"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "OKC",
		"cnt": "197"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "PHL",
		"cnt": "32"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "DHN",
		"cnt": "214"
	},
	{
		"airline": "EV",
		"airport1": "OKC",
		"airport2": "MEM",
		"cnt": "48"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "LWB",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "GPT",
		"cnt": "204"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "EWN",
		"cnt": "112"
	},
	{
		"airline": "EV",
		"airport1": "BNA",
		"airport2": "DTW",
		"cnt": "54"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ELP",
		"cnt": "32"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "IAH",
		"cnt": "36"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "SYR",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "HOU",
		"cnt": "30"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CMH",
		"cnt": "38"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MLB",
		"cnt": "74"
	},
	{
		"airline": "EV",
		"airport1": "JAN",
		"airport2": "DCA",
		"cnt": "29"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "JAN",
		"cnt": "160"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "LFT",
		"cnt": "112"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MLI",
		"cnt": "222"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MLU",
		"cnt": "158"
	},
	{
		"airline": "EV",
		"airport1": "DFW",
		"airport2": "MEM",
		"cnt": "35"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "EYW",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "TUL",
		"cnt": "110"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "DTW",
		"cnt": "53"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ROA",
		"cnt": "214"
	},
	{
		"airline": "EV",
		"airport1": "LEX",
		"airport2": "MEM",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "XNA",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "JAX",
		"cnt": "110"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "DTW",
		"cnt": "108"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "MSY",
		"cnt": "20"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "MHT",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "ILM",
		"cnt": "325"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "PWM",
		"cnt": "109"
	},
	{
		"airline": "EV",
		"airport1": "BOS",
		"airport2": "DCA",
		"cnt": "447"
	},
	{
		"airline": "EV",
		"airport1": "SBN",
		"airport2": "DTW",
		"cnt": "8"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "BHM",
		"cnt": "430"
	},
	{
		"airline": "EV",
		"airport1": "ELM",
		"airport2": "DTW",
		"cnt": "108"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CHO",
		"cnt": "158"
	},
	{
		"airline": "EV",
		"airport1": "IAD",
		"airport2": "PNS",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "DCA",
		"cnt": "47"
	},
	{
		"airline": "EV",
		"airport1": "ORD",
		"airport2": "BTV",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "MCI",
		"airport2": "CVG",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "GNV",
		"airport2": "ATL",
		"cnt": "364"
	},
	{
		"airline": "EV",
		"airport1": "PHL",
		"airport2": "MEM",
		"cnt": "63"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "SYR",
		"cnt": "100"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "BNA",
		"cnt": "110"
	},
	{
		"airline": "EV",
		"airport1": "BNA",
		"airport2": "MEM",
		"cnt": "64"
	},
	{
		"airline": "EV",
		"airport1": "DTW",
		"airport2": "ABE",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MEM",
		"cnt": "66"
	},
	{
		"airline": "EV",
		"airport1": "HSV",
		"airport2": "IAD",
		"cnt": "84"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "MEI",
		"cnt": "104"
	},
	{
		"airline": "EV",
		"airport1": "CVG",
		"airport2": "ATL",
		"cnt": "28"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "PNS",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "MGM",
		"cnt": "154"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "OAJ",
		"cnt": "212"
	},
	{
		"airline": "EV",
		"airport1": "MEM",
		"airport2": "TUL",
		"cnt": "67"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "TYS",
		"cnt": "384"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "XNA",
		"cnt": "230"
	},
	{
		"airline": "EV",
		"airport1": "DAY",
		"airport2": "ORD",
		"cnt": "26"
	},
	{
		"airline": "EV",
		"airport1": "STL",
		"airport2": "CVG",
		"cnt": "26"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "AVL",
		"cnt": "448"
	},
	{
		"airline": "EV",
		"airport1": "CHA",
		"airport2": "ATL",
		"cnt": "518"
	},
	{
		"airline": "EV",
		"airport1": "ALB",
		"airport2": "DTW",
		"cnt": "4"
	},
	{
		"airline": "EV",
		"airport1": "FAY",
		"airport2": "ATL",
		"cnt": "482"
	},
	{
		"airline": "EV",
		"airport1": "AUS",
		"airport2": "DTW",
		"cnt": "28"
	},
	{
		"airline": "EV",
		"airport1": "FWA",
		"airport2": "CVG",
		"cnt": "2"
	},
	{
		"airline": "EV",
		"airport1": "CMH",
		"airport2": "IAD",
		"cnt": "56"
	},
	{
		"airline": "EV",
		"airport1": "ATL",
		"airport2": "CHS",
		"cnt": "8"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "SRQ",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ROC",
		"airport2": "RSW",
		"cnt": "18"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "RIC",
		"cnt": "196"
	},
	{
		"airline": "FL",
		"airport1": "LEX",
		"airport2": "MCO",
		"cnt": "32"
	},
	{
		"airline": "FL",
		"airport1": "MDW",
		"airport2": "RSW",
		"cnt": "136"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "PWM",
		"cnt": "8"
	},
	{
		"airline": "FL",
		"airport1": "MCI",
		"airport2": "MCO",
		"cnt": "26"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "SJU",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "AVL",
		"airport2": "MCO",
		"cnt": "24"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "UTM",
		"cnt": "32"
	},
	{
		"airline": "FL",
		"airport1": "EYW",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "FLL",
		"airport2": "MKE",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "CLT",
		"cnt": "108"
	},
	{
		"airline": "FL",
		"airport1": "DCA",
		"airport2": "RSW",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ACY",
		"airport2": "ATL",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "IND",
		"cnt": "178"
	},
	{
		"airline": "FL",
		"airport1": "ABE",
		"airport2": "MCO",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "PBI",
		"cnt": "168"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "JAX",
		"cnt": "208"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "ROC",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "IND",
		"airport2": "TPA",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "BMI",
		"cnt": "160"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "PIT",
		"cnt": "128"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "MSP",
		"cnt": "156"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "DFW",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "GRR",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "CMH",
		"airport2": "FLL",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "FLL",
		"airport2": "LEX",
		"cnt": "24"
	},
	{
		"airline": "FL",
		"airport1": "FNT",
		"airport2": "RSW",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "PBI",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "LGA",
		"cnt": "407"
	},
	{
		"airline": "FL",
		"airport1": "DAY",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BUF",
		"airport2": "RSW",
		"cnt": "14"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "CLT",
		"cnt": "128"
	},
	{
		"airline": "FL",
		"airport1": "CMH",
		"airport2": "RSW",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "TPA",
		"airport2": "DAY",
		"cnt": "45"
	},
	{
		"airline": "FL",
		"airport1": "CRW",
		"airport2": "MCO",
		"cnt": "24"
	},
	{
		"airline": "FL",
		"airport1": "DTW",
		"airport2": "MCO",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "CAK",
		"airport2": "MCO",
		"cnt": "95"
	},
	{
		"airline": "FL",
		"airport1": "BKG",
		"airport2": "MCO",
		"cnt": "8"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "BKG",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "CAK",
		"airport2": "LGA",
		"cnt": "111"
	},
	{
		"airline": "FL",
		"airport1": "LAS",
		"airport2": "MKE",
		"cnt": "147"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "BWI",
		"cnt": "303"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "DCA",
		"cnt": "324"
	},
	{
		"airline": "FL",
		"airport1": "LGA",
		"airport2": "LAS",
		"cnt": "2"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "SRQ",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "STL",
		"cnt": "168"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "RSW",
		"cnt": "68"
	},
	{
		"airline": "FL",
		"airport1": "GRR",
		"airport2": "RSW",
		"cnt": "42"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "FLL",
		"cnt": "446"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "RDU",
		"cnt": "208"
	},
	{
		"airline": "FL",
		"airport1": "DSM",
		"airport2": "MCO",
		"cnt": "16"
	},
	{
		"airline": "FL",
		"airport1": "LAX",
		"airport2": "MKE",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "RIC",
		"cnt": "45"
	},
	{
		"airline": "FL",
		"airport1": "CAK",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "HPN",
		"airport2": "MCO",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "IAD",
		"cnt": "176"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "MIA",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "LGA",
		"airport2": "PHF",
		"cnt": "104"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "STL",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "TPA",
		"cnt": "156"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "RSW",
		"cnt": "228"
	},
	{
		"airline": "FL",
		"airport1": "FLL",
		"airport2": "MDT",
		"cnt": "24"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "FLL",
		"cnt": "168"
	},
	{
		"airline": "FL",
		"airport1": "ABE",
		"airport2": "FLL",
		"cnt": "26"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "CAK",
		"cnt": "213"
	},
	{
		"airline": "FL",
		"airport1": "DEN",
		"airport2": "MKE",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "LGA",
		"airport2": "MCO",
		"cnt": "16"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BMI",
		"airport2": "RSW",
		"cnt": "14"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "MSY",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MSY",
		"cnt": "212"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "MDW",
		"cnt": "156"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "MDT",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "DAY",
		"cnt": "167"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "DEN",
		"cnt": "164"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MSP",
		"cnt": "208"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "PIT",
		"cnt": "212"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "TPA",
		"cnt": "399"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "SRQ",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "BUF",
		"cnt": "168"
	},
	{
		"airline": "FL",
		"airport1": "FNT",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "MLI",
		"cnt": "32"
	},
	{
		"airline": "FL",
		"airport1": "MDW",
		"airport2": "SRQ",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "IND",
		"airport2": "LGA",
		"cnt": "108"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "SJU",
		"cnt": "28"
	},
	{
		"airline": "FL",
		"airport1": "DFW",
		"airport2": "MKE",
		"cnt": "2"
	},
	{
		"airline": "FL",
		"airport1": "CLT",
		"airport2": "MCO",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "SRQ",
		"cnt": "8"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "FNT",
		"cnt": "168"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "ROC",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "GRR",
		"cnt": "111"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "RSW",
		"cnt": "110"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "HPN",
		"cnt": "104"
	},
	{
		"airline": "FL",
		"airport1": "FLL",
		"airport2": "IND",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "JAX",
		"cnt": "97"
	},
	{
		"airline": "FL",
		"airport1": "BMI",
		"airport2": "MCO",
		"cnt": "32"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "PHX",
		"cnt": "36"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MKE",
		"cnt": "234"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "PHL",
		"cnt": "243"
	},
	{
		"airline": "FL",
		"airport1": "IND",
		"airport2": "RSW",
		"cnt": "172"
	},
	{
		"airline": "FL",
		"airport1": "BUF",
		"airport2": "MCO",
		"cnt": "50"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "ICT",
		"cnt": "160"
	},
	{
		"airline": "FL",
		"airport1": "GPT",
		"airport2": "TPA",
		"cnt": "24"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "MKE",
		"cnt": "111"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "TPA",
		"cnt": "80"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "PHF",
		"cnt": "196"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "PWM",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MCO",
		"cnt": "505"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MCI",
		"cnt": "168"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "MCO",
		"cnt": "281"
	},
	{
		"airline": "FL",
		"airport1": "DCA",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "GPT",
		"cnt": "24"
	},
	{
		"airline": "FL",
		"airport1": "PIT",
		"airport2": "TPA",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "LAS",
		"cnt": "155"
	},
	{
		"airline": "FL",
		"airport1": "DCA",
		"airport2": "MKE",
		"cnt": "216"
	},
	{
		"airline": "FL",
		"airport1": "HSV",
		"airport2": "MCO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "LAX",
		"cnt": "154"
	},
	{
		"airline": "FL",
		"airport1": "LGA",
		"airport2": "MKE",
		"cnt": "246"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "HOU",
		"cnt": "256"
	},
	{
		"airline": "FL",
		"airport1": "IND",
		"airport2": "SRQ",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "CMH",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "FLL",
		"airport2": "PIT",
		"cnt": "88"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MDW",
		"cnt": "294"
	},
	{
		"airline": "FL",
		"airport1": "MLI",
		"airport2": "RSW",
		"cnt": "14"
	},
	{
		"airline": "FL",
		"airport1": "PIT",
		"airport2": "RSW",
		"cnt": "80"
	},
	{
		"airline": "FL",
		"airport1": "IND",
		"airport2": "MCO",
		"cnt": "208"
	},
	{
		"airline": "FL",
		"airport1": "CMH",
		"airport2": "MCO",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "PHF",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "RSW",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "BOS",
		"cnt": "214"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "ROC",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "SFO",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "PHX",
		"cnt": "92"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "DTW",
		"cnt": "186"
	},
	{
		"airline": "FL",
		"airport1": "CAK",
		"airport2": "RSW",
		"cnt": "44"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "TYS",
		"cnt": "32"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "BWI",
		"cnt": "323"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "SEA",
		"cnt": "55"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "CAK",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "PHL",
		"cnt": "180"
	},
	{
		"airline": "FL",
		"airport1": "ROC",
		"airport2": "TPA",
		"cnt": "50"
	},
	{
		"airline": "FL",
		"airport1": "TPA",
		"airport2": "GRR",
		"cnt": "42"
	},
	{
		"airline": "FL",
		"airport1": "MKE",
		"airport2": "MSY",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "DFW",
		"cnt": "319"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "MEM",
		"cnt": "196"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "MCO",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "SJU",
		"cnt": "76"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "MKE",
		"cnt": "178"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "PNS",
		"cnt": "160"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "HSV",
		"cnt": "112"
	},
	{
		"airline": "FL",
		"airport1": "ATL",
		"airport2": "SAT",
		"cnt": "164"
	},
	{
		"airline": "FL",
		"airport1": "MCO",
		"airport2": "MSP",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "PHF",
		"cnt": "56"
	},
	{
		"airline": "FL",
		"airport1": "BWI",
		"airport2": "DAY",
		"cnt": "140"
	},
	{
		"airline": "FL",
		"airport1": "HPN",
		"airport2": "PBI",
		"cnt": "100"
	},
	{
		"airline": "FL",
		"airport1": "BOS",
		"airport2": "MKE",
		"cnt": "108"
	},
	{
		"airline": "FL",
		"airport1": "FNT",
		"airport2": "TPA",
		"cnt": "44"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "ATL",
		"cnt": "840"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "EWR",
		"cnt": "102"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "LAX",
		"cnt": "270"
	},
	{
		"airline": "DL",
		"airport1": "RSW",
		"airport2": "CVG",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "MSY",
		"cnt": "88"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "DFW",
		"cnt": "76"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "ONT",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "TPA",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "MSP",
		"cnt": "211"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "JFK",
		"cnt": "55"
	},
	{
		"airline": "DL",
		"airport1": "SAN",
		"airport2": "DTW",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MKE",
		"cnt": "99"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "LAS",
		"cnt": "368"
	},
	{
		"airline": "DL",
		"airport1": "DCA",
		"airport2": "MSP",
		"cnt": "277"
	},
	{
		"airline": "DL",
		"airport1": "BDL",
		"airport2": "MSP",
		"cnt": "62"
	},
	{
		"airline": "DL",
		"airport1": "CMH",
		"airport2": "ATL",
		"cnt": "328"
	},
	{
		"airline": "DL",
		"airport1": "BUF",
		"airport2": "ATL",
		"cnt": "268"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "SLC",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "ANC",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "JAN",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "PHF",
		"cnt": "173"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "DFW",
		"cnt": "2"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "SAN",
		"cnt": "194"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "ORD",
		"cnt": "250"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "STL",
		"cnt": "128"
	},
	{
		"airline": "DL",
		"airport1": "DEN",
		"airport2": "MSP",
		"cnt": "308"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "PBI",
		"cnt": "544"
	},
	{
		"airline": "DL",
		"airport1": "GRB",
		"airport2": "MSP",
		"cnt": "75"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "JAX",
		"cnt": "644"
	},
	{
		"airline": "DL",
		"airport1": "BDL",
		"airport2": "MCO",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "STL",
		"cnt": "54"
	},
	{
		"airline": "DL",
		"airport1": "MCO",
		"airport2": "BOS",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "ORF",
		"airport2": "ATL",
		"cnt": "330"
	},
	{
		"airline": "DL",
		"airport1": "PHL",
		"airport2": "ATL",
		"cnt": "518"
	},
	{
		"airline": "DL",
		"airport1": "SAT",
		"airport2": "JFK",
		"cnt": "1"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "ANC",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MKE",
		"airport2": "MSP",
		"cnt": "290"
	},
	{
		"airline": "DL",
		"airport1": "RSW",
		"airport2": "DTW",
		"cnt": "268"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "EGE",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MTJ",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "CVG",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "SAN",
		"airport2": "ATL",
		"cnt": "266"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "CLT",
		"cnt": "158"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "JAC",
		"cnt": "99"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "CLE",
		"cnt": "82"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "IND",
		"cnt": "135"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MSY",
		"cnt": "80"
	},
	{
		"airline": "DL",
		"airport1": "SJU",
		"airport2": "JFK",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "RDU",
		"airport2": "DTW",
		"cnt": "118"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "ATL",
		"cnt": "568"
	},
	{
		"airline": "DL",
		"airport1": "BOI",
		"airport2": "SLC",
		"cnt": "86"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "HNL",
		"cnt": "168"
	},
	{
		"airline": "DL",
		"airport1": "HNL",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "IAD",
		"airport2": "ATL",
		"cnt": "376"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "RDU",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "LIH",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "DFW",
		"airport2": "DTW",
		"cnt": "27"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "SFO",
		"cnt": "162"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "HDN",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MIA",
		"airport2": "DCA",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MCI",
		"cnt": "54"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "MSP",
		"cnt": "338"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MCO",
		"cnt": "336"
	},
	{
		"airline": "DL",
		"airport1": "SEA",
		"airport2": "DTW",
		"cnt": "160"
	},
	{
		"airline": "DL",
		"airport1": "PHX",
		"airport2": "ATL",
		"cnt": "316"
	},
	{
		"airline": "DL",
		"airport1": "SAT",
		"airport2": "DTW",
		"cnt": "48"
	},
	{
		"airline": "DL",
		"airport1": "PHL",
		"airport2": "MSP",
		"cnt": "182"
	},
	{
		"airline": "DL",
		"airport1": "ORD",
		"airport2": "MSP",
		"cnt": "117"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "LGA",
		"cnt": "108"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "CVG",
		"cnt": "130"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "PDX",
		"cnt": "122"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "GRB",
		"cnt": "27"
	},
	{
		"airline": "DL",
		"airport1": "RIC",
		"airport2": "ATL",
		"cnt": "398"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "SEA",
		"cnt": "265"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "ATL",
		"cnt": "618"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "STT",
		"cnt": "84"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "FLL",
		"cnt": "100"
	},
	{
		"airline": "DL",
		"airport1": "FLL",
		"airport2": "LGA",
		"cnt": "332"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "OAK",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "PIT",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "DFW",
		"cnt": "2"
	},
	{
		"airline": "DL",
		"airport1": "OGG",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "FLL",
		"airport2": "MEM",
		"cnt": "80"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "SEA",
		"cnt": "280"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "TPA",
		"cnt": "321"
	},
	{
		"airline": "DL",
		"airport1": "PHL",
		"airport2": "DTW",
		"cnt": "163"
	},
	{
		"airline": "DL",
		"airport1": "COS",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "HSV",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "BDL",
		"airport2": "DTW",
		"cnt": "54"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "FLL",
		"cnt": "125"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "CMH",
		"cnt": "24"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MHT",
		"cnt": "33"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "STL",
		"cnt": "408"
	},
	{
		"airline": "DL",
		"airport1": "SAN",
		"airport2": "JFK",
		"cnt": "104"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "DTW",
		"cnt": "107"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "MEM",
		"cnt": "154"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "LAS",
		"cnt": "341"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "BDL",
		"cnt": "318"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "MCO",
		"cnt": "222"
	},
	{
		"airline": "DL",
		"airport1": "MIA",
		"airport2": "CVG",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "CLT",
		"airport2": "ATL",
		"cnt": "471"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "BWI",
		"cnt": "42"
	},
	{
		"airline": "DL",
		"airport1": "FLL",
		"airport2": "BDL",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "TPA",
		"cnt": "181"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MIA",
		"cnt": "162"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "MEM",
		"cnt": "164"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "HNL",
		"cnt": "24"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "PWM",
		"cnt": "81"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "SNA",
		"cnt": "228"
	},
	{
		"airline": "DL",
		"airport1": "SFO",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "SNA",
		"airport2": "ATL",
		"cnt": "258"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "BOS",
		"cnt": "285"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "MCO",
		"cnt": "168"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MSN",
		"airport2": "MSP",
		"cnt": "110"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "SLC",
		"cnt": "224"
	},
	{
		"airline": "DL",
		"airport1": "AUS",
		"airport2": "ATL",
		"cnt": "310"
	},
	{
		"airline": "DL",
		"airport1": "SJU",
		"airport2": "ATL",
		"cnt": "288"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "MCI",
		"cnt": "10"
	},
	{
		"airline": "DL",
		"airport1": "SFO",
		"airport2": "ATL",
		"cnt": "312"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "RSW",
		"cnt": "213"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "DFW",
		"cnt": "544"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "DEN",
		"cnt": "168"
	},
	{
		"airline": "DL",
		"airport1": "FAR",
		"airport2": "MSP",
		"cnt": "116"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "MSY",
		"cnt": "152"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "LAS",
		"cnt": "74"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "PHX",
		"cnt": "216"
	},
	{
		"airline": "DL",
		"airport1": "SAT",
		"airport2": "ATL",
		"cnt": "415"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "ABQ",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "OMA",
		"cnt": "25"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "DEN",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MCO",
		"airport2": "LAX",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "LAS",
		"cnt": "110"
	},
	{
		"airline": "DL",
		"airport1": "GRR",
		"airport2": "DTW",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "LIT",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "BDL",
		"airport2": "TPA",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "LAS",
		"airport2": "SNA",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "DCA",
		"airport2": "ATL",
		"cnt": "838"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "PSP",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "SEA",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "SNA",
		"airport2": "MSP",
		"cnt": "146"
	},
	{
		"airline": "DL",
		"airport1": "TPA",
		"airport2": "CVG",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "ELP",
		"airport2": "ATL",
		"cnt": "80"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "BWI",
		"cnt": "306"
	},
	{
		"airline": "DL",
		"airport1": "ALB",
		"airport2": "ATL",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "SFO",
		"cnt": "48"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "TUS",
		"cnt": "104"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "ATL",
		"cnt": "372"
	},
	{
		"airline": "DL",
		"airport1": "MCO",
		"airport2": "SLC",
		"cnt": "100"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "SFO",
		"cnt": "272"
	},
	{
		"airline": "DL",
		"airport1": "SEA",
		"airport2": "JFK",
		"cnt": "128"
	},
	{
		"airline": "DL",
		"airport1": "DCA",
		"airport2": "MCO",
		"cnt": "212"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "BOS",
		"cnt": "622"
	},
	{
		"airline": "DL",
		"airport1": "BZN",
		"airport2": "MSP",
		"cnt": "58"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "LGA",
		"cnt": "479"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "LGA",
		"cnt": "329"
	},
	{
		"airline": "DL",
		"airport1": "BOS",
		"airport2": "SLC",
		"cnt": "102"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "PVD",
		"cnt": "158"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MSY",
		"cnt": "582"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "DAY",
		"cnt": "212"
	},
	{
		"airline": "DL",
		"airport1": "GEG",
		"airport2": "SLC",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "IND",
		"cnt": "168"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "BOI",
		"cnt": "26"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "PIT",
		"cnt": "319"
	},
	{
		"airline": "DL",
		"airport1": "EWR",
		"airport2": "ATL",
		"cnt": "558"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "TPA",
		"cnt": "634"
	},
	{
		"airline": "DL",
		"airport1": "SAV",
		"airport2": "ATL",
		"cnt": "384"
	},
	{
		"airline": "DL",
		"airport1": "MKE",
		"airport2": "ATL",
		"cnt": "322"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "SRQ",
		"cnt": "334"
	},
	{
		"airline": "DL",
		"airport1": "DFW",
		"airport2": "JFK",
		"cnt": "1"
	},
	{
		"airline": "DL",
		"airport1": "DEN",
		"airport2": "ATL",
		"cnt": "460"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "JAC",
		"cnt": "12"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "TPA",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "JAX",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "BIL",
		"cnt": "23"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "PBI",
		"cnt": "208"
	},
	{
		"airline": "DL",
		"airport1": "SFO",
		"airport2": "HNL",
		"cnt": "48"
	},
	{
		"airline": "DL",
		"airport1": "DCA",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "BOS",
		"airport2": "JFK",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "SMF",
		"airport2": "MSP",
		"cnt": "96"
	},
	{
		"airline": "DL",
		"airport1": "IAH",
		"airport2": "ATL",
		"cnt": "266"
	},
	{
		"airline": "DL",
		"airport1": "RSW",
		"airport2": "LGA",
		"cnt": "154"
	},
	{
		"airline": "DL",
		"airport1": "MLB",
		"airport2": "ATL",
		"cnt": "150"
	},
	{
		"airline": "DL",
		"airport1": "MIA",
		"airport2": "MEM",
		"cnt": "106"
	},
	{
		"airline": "DL",
		"airport1": "MCO",
		"airport2": "CVG",
		"cnt": "162"
	},
	{
		"airline": "DL",
		"airport1": "DEN",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "KOA",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "FNT",
		"cnt": "114"
	},
	{
		"airline": "DL",
		"airport1": "BOS",
		"airport2": "MSP",
		"cnt": "262"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "SJU",
		"cnt": "8"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "481"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "STX",
		"cnt": "10"
	},
	{
		"airline": "DL",
		"airport1": "STL",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "CLT",
		"airport2": "MEM",
		"cnt": "50"
	},
	{
		"airline": "DL",
		"airport1": "MCI",
		"airport2": "MSP",
		"cnt": "104"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "SDF",
		"cnt": "87"
	},
	{
		"airline": "DL",
		"airport1": "JAX",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "GRR",
		"cnt": "125"
	},
	{
		"airline": "DL",
		"airport1": "DAB",
		"airport2": "ATL",
		"cnt": "241"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "FLL",
		"cnt": "48"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "GRR",
		"cnt": "23"
	},
	{
		"airline": "DL",
		"airport1": "IND",
		"airport2": "SLC",
		"cnt": "50"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "SFO",
		"cnt": "260"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "OMA",
		"cnt": "14"
	},
	{
		"airline": "DL",
		"airport1": "LIT",
		"airport2": "MEM",
		"cnt": "33"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "SLC",
		"cnt": "473"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "ORD",
		"cnt": "48"
	},
	{
		"airline": "DL",
		"airport1": "FLL",
		"airport2": "ATL",
		"cnt": "778"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "OKC",
		"cnt": "19"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MCO",
		"cnt": "888"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MCI",
		"cnt": "392"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "STL",
		"cnt": "155"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "IAD",
		"cnt": "4"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "RNO",
		"cnt": "110"
	},
	{
		"airline": "DL",
		"airport1": "PBI",
		"airport2": "DTW",
		"cnt": "157"
	},
	{
		"airline": "DL",
		"airport1": "EWR",
		"airport2": "DTW",
		"cnt": "76"
	},
	{
		"airline": "DL",
		"airport1": "EWR",
		"airport2": "MSP",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "LAS",
		"cnt": "316"
	},
	{
		"airline": "DL",
		"airport1": "ECP",
		"airport2": "ATL",
		"cnt": "110"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "GPT",
		"cnt": "50"
	},
	{
		"airline": "DL",
		"airport1": "LGA",
		"airport2": "MCO",
		"cnt": "328"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "BZN",
		"cnt": "12"
	},
	{
		"airline": "DL",
		"airport1": "BNA",
		"airport2": "DTW",
		"cnt": "105"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "MSP",
		"cnt": "244"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "PHX",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "DCA",
		"airport2": "DTW",
		"cnt": "312"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "TLH",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "BOS",
		"cnt": "28"
	},
	{
		"airline": "DL",
		"airport1": "EGE",
		"airport2": "ATL",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "HOU",
		"cnt": "158"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "SAN",
		"cnt": "164"
	},
	{
		"airline": "DL",
		"airport1": "IND",
		"airport2": "LAX",
		"cnt": "36"
	},
	{
		"airline": "DL",
		"airport1": "BDL",
		"airport2": "PBI",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "BDL",
		"airport2": "RSW",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "SEA",
		"cnt": "254"
	},
	{
		"airline": "DL",
		"airport1": "PIT",
		"airport2": "DTW",
		"cnt": "2"
	},
	{
		"airline": "DL",
		"airport1": "CHS",
		"airport2": "ATL",
		"cnt": "372"
	},
	{
		"airline": "DL",
		"airport1": "IND",
		"airport2": "ATL",
		"cnt": "413"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MDW",
		"cnt": "374"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "SYR",
		"cnt": "23"
	},
	{
		"airline": "DL",
		"airport1": "SJC",
		"airport2": "ATL",
		"cnt": "46"
	},
	{
		"airline": "DL",
		"airport1": "LAX",
		"airport2": "DTW",
		"cnt": "301"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "EYW",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "LAS",
		"airport2": "ATL",
		"cnt": "430"
	},
	{
		"airline": "DL",
		"airport1": "SRQ",
		"airport2": "DTW",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "SAT",
		"cnt": "24"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "ROC",
		"cnt": "164"
	},
	{
		"airline": "DL",
		"airport1": "PNS",
		"airport2": "ATL",
		"cnt": "412"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "FLL",
		"cnt": "168"
	},
	{
		"airline": "DL",
		"airport1": "CVG",
		"airport2": "LAS",
		"cnt": "88"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MSN",
		"cnt": "67"
	},
	{
		"airline": "DL",
		"airport1": "PHX",
		"airport2": "MSP",
		"cnt": "332"
	},
	{
		"airline": "DL",
		"airport1": "TPA",
		"airport2": "LGA",
		"cnt": "206"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "DTW",
		"cnt": "523"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "JFK",
		"cnt": "220"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "SJU",
		"cnt": "8"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "SEA",
		"cnt": "36"
	},
	{
		"airline": "DL",
		"airport1": "RSW",
		"airport2": "ATL",
		"cnt": "448"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "STT",
		"cnt": "8"
	},
	{
		"airline": "DL",
		"airport1": "PDX",
		"airport2": "MSP",
		"cnt": "160"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "BWI",
		"cnt": "526"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "TUS",
		"cnt": "40"
	},
	{
		"airline": "DL",
		"airport1": "IAD",
		"airport2": "SLC",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "SMF",
		"cnt": "57"
	},
	{
		"airline": "DL",
		"airport1": "RDU",
		"airport2": "ATL",
		"cnt": "586"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "PHX",
		"cnt": "168"
	},
	{
		"airline": "DL",
		"airport1": "IAH",
		"airport2": "MSP",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "MEM",
		"airport2": "PHX",
		"cnt": "100"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "LAS",
		"cnt": "252"
	},
	{
		"airline": "DL",
		"airport1": "JFK",
		"airport2": "LAX",
		"cnt": "372"
	},
	{
		"airline": "DL",
		"airport1": "SLC",
		"airport2": "PHL",
		"cnt": "98"
	},
	{
		"airline": "DL",
		"airport1": "BWI",
		"airport2": "SLC",
		"cnt": "100"
	},
	{
		"airline": "DL",
		"airport1": "GSO",
		"airport2": "ATL",
		"cnt": "52"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "DTW",
		"cnt": "466"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "BNA",
		"cnt": "276"
	},
	{
		"airline": "DL",
		"airport1": "SMF",
		"airport2": "ATL",
		"cnt": "88"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "MEM",
		"cnt": "423"
	},
	{
		"airline": "DL",
		"airport1": "GEG",
		"airport2": "MSP",
		"cnt": "104"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "BWI",
		"cnt": "128"
	},
	{
		"airline": "DL",
		"airport1": "SEA",
		"airport2": "CVG",
		"cnt": "42"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "HNL",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "MSP",
		"airport2": "ABQ",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "CVG",
		"cnt": "348"
	},
	{
		"airline": "DL",
		"airport1": "BOS",
		"airport2": "ATL",
		"cnt": "579"
	},
	{
		"airline": "DL",
		"airport1": "MSY",
		"airport2": "LAX",
		"cnt": "88"
	},
	{
		"airline": "DL",
		"airport1": "PDX",
		"airport2": "JFK",
		"cnt": "56"
	},
	{
		"airline": "DL",
		"airport1": "BHM",
		"airport2": "ATL",
		"cnt": "152"
	},
	{
		"airline": "DL",
		"airport1": "MCO",
		"airport2": "MSP",
		"cnt": "269"
	},
	{
		"airline": "DL",
		"airport1": "TPA",
		"airport2": "DCA",
		"cnt": "108"
	},
	{
		"airline": "DL",
		"airport1": "SJC",
		"airport2": "MSP",
		"cnt": "96"
	},
	{
		"airline": "DL",
		"airport1": "MIA",
		"airport2": "MSP",
		"cnt": "112"
	},
	{
		"airline": "DL",
		"airport1": "MIA",
		"airport2": "JFK",
		"cnt": "272"
	},
	{
		"airline": "DL",
		"airport1": "ATL",
		"airport2": "PDX",
		"cnt": "146"
	},
	{
		"airline": "DL",
		"airport1": "MIA",
		"airport2": "ATL",
		"cnt": "608"
	},
	{
		"airline": "DL",
		"airport1": "DCA",
		"airport2": "MEM",
		"cnt": "100"
	},
	{
		"airline": "DL",
		"airport1": "DTW",
		"airport2": "MEM",
		"cnt": "218"
	},
	{
		"airline": "DL",
		"airport1": "FLL",
		"airport2": "DTW",
		"cnt": "314"
	},
	{
		"airline": "DL",
		"airport1": "CLT",
		"airport2": "MSP",
		"cnt": "89"
	},
	{
		"airline": "YV",
		"airport1": "AUS",
		"airport2": "ORD",
		"cnt": "18"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "SBA",
		"cnt": "254"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "ORF",
		"cnt": "36"
	},
	{
		"airline": "YV",
		"airport1": "MSN",
		"airport2": "ORD",
		"cnt": "4"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "SBP",
		"cnt": "112"
	},
	{
		"airline": "YV",
		"airport1": "EWR",
		"airport2": "IAD",
		"cnt": "2"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "SRQ",
		"cnt": "50"
	},
	{
		"airline": "YV",
		"airport1": "BWI",
		"airport2": "CLT",
		"cnt": "2"
	},
	{
		"airline": "YV",
		"airport1": "ONT",
		"airport2": "PHX",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "DTW",
		"airport2": "ORD",
		"cnt": "50"
	},
	{
		"airline": "YV",
		"airport1": "ELP",
		"airport2": "ORD",
		"cnt": "108"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "LGA",
		"cnt": "56"
	},
	{
		"airline": "YV",
		"airport1": "BDL",
		"airport2": "ORD",
		"cnt": "4"
	},
	{
		"airline": "YV",
		"airport1": "ALB",
		"airport2": "ORD",
		"cnt": "29"
	},
	{
		"airline": "YV",
		"airport1": "OAK",
		"airport2": "PHX",
		"cnt": "12"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "PWM",
		"cnt": "59"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "MYR",
		"cnt": "52"
	},
	{
		"airline": "YV",
		"airport1": "ROC",
		"airport2": "ORD",
		"cnt": "24"
	},
	{
		"airline": "YV",
		"airport1": "HNL",
		"airport2": "ITO",
		"cnt": "248"
	},
	{
		"airline": "YV",
		"airport1": "IND",
		"airport2": "ORD",
		"cnt": "22"
	},
	{
		"airline": "YV",
		"airport1": "FAT",
		"airport2": "LAS",
		"cnt": "48"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "SAT",
		"cnt": "166"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "ROC",
		"cnt": "24"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "EWR",
		"cnt": "120"
	},
	{
		"airline": "YV",
		"airport1": "ATL",
		"airport2": "CLT",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "IAD",
		"cnt": "344"
	},
	{
		"airline": "YV",
		"airport1": "BTV",
		"airport2": "IAD",
		"cnt": "36"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "PVD",
		"cnt": "60"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "CHS",
		"cnt": "42"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "RDU",
		"cnt": "76"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "PVD",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "DAB",
		"cnt": "66"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "PIT",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "BDL",
		"airport2": "CLT",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "BUR",
		"airport2": "PHX",
		"cnt": "118"
	},
	{
		"airline": "YV",
		"airport1": "DSM",
		"airport2": "ORD",
		"cnt": "32"
	},
	{
		"airline": "YV",
		"airport1": "BNA",
		"airport2": "CLT",
		"cnt": "194"
	},
	{
		"airline": "YV",
		"airport1": "ATL",
		"airport2": "IAD",
		"cnt": "141"
	},
	{
		"airline": "YV",
		"airport1": "MCI",
		"airport2": "ORD",
		"cnt": "32"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "CVG",
		"cnt": "198"
	},
	{
		"airline": "YV",
		"airport1": "HNL",
		"airport2": "OGG",
		"cnt": "376"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "DTW",
		"cnt": "56"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "SMF",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "PSP",
		"cnt": "320"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "STL",
		"cnt": "96"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "JAX",
		"cnt": "112"
	},
	{
		"airline": "YV",
		"airport1": "HNL",
		"airport2": "KOA",
		"cnt": "312"
	},
	{
		"airline": "YV",
		"airport1": "MIA",
		"airport2": "ORD",
		"cnt": "32"
	},
	{
		"airline": "YV",
		"airport1": "AVP",
		"airport2": "CLT",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "ABQ",
		"airport2": "PHX",
		"cnt": "249"
	},
	{
		"airline": "YV",
		"airport1": "MEM",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "YV",
		"airport1": "GJT",
		"airport2": "PHX",
		"cnt": "144"
	},
	{
		"airline": "YV",
		"airport1": "FLG",
		"airport2": "PHX",
		"cnt": "310"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "DFW",
		"cnt": "10"
	},
	{
		"airline": "YV",
		"airport1": "DTW",
		"airport2": "IAD",
		"cnt": "3"
	},
	{
		"airline": "YV",
		"airport1": "LAS",
		"airport2": "SFO",
		"cnt": "120"
	},
	{
		"airline": "YV",
		"airport1": "LAS",
		"airport2": "LAX",
		"cnt": "56"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "SLC",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "IND",
		"cnt": "41"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "BNA",
		"cnt": "2"
	},
	{
		"airline": "YV",
		"airport1": "BUF",
		"airport2": "ORD",
		"cnt": "42"
	},
	{
		"airline": "YV",
		"airport1": "LAS",
		"airport2": "PHX",
		"cnt": "64"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "SAT",
		"cnt": "55"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "SAV",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "MIA",
		"cnt": "52"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "FAY",
		"cnt": "50"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "IAH",
		"cnt": "4"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "MDT",
		"cnt": "100"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "TEX",
		"cnt": "104"
	},
	{
		"airline": "YV",
		"airport1": "BFL",
		"airport2": "PHX",
		"cnt": "176"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "PIT",
		"cnt": "82"
	},
	{
		"airline": "YV",
		"airport1": "BUF",
		"airport2": "CLT",
		"cnt": "20"
	},
	{
		"airline": "YV",
		"airport1": "ALB",
		"airport2": "IAD",
		"cnt": "50"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "ORF",
		"cnt": "145"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "PNS",
		"cnt": "120"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "RIC",
		"cnt": "80"
	},
	{
		"airline": "YV",
		"airport1": "JAX",
		"airport2": "ORD",
		"cnt": "89"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "ILM",
		"cnt": "228"
	},
	{
		"airline": "YV",
		"airport1": "ATL",
		"airport2": "ORD",
		"cnt": "69"
	},
	{
		"airline": "YV",
		"airport1": "BUF",
		"airport2": "IAD",
		"cnt": "50"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "MEM",
		"cnt": "240"
	},
	{
		"airline": "YV",
		"airport1": "LGB",
		"airport2": "PHX",
		"cnt": "208"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "SBN",
		"cnt": "92"
	},
	{
		"airline": "YV",
		"airport1": "CHS",
		"airport2": "IAD",
		"cnt": "11"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "MHT",
		"cnt": "4"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "SDF",
		"cnt": "142"
	},
	{
		"airline": "YV",
		"airport1": "BHM",
		"airport2": "CLT",
		"cnt": "40"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "GSO",
		"cnt": "112"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "YUM",
		"cnt": "328"
	},
	{
		"airline": "YV",
		"airport1": "MEM",
		"airport2": "ORD",
		"cnt": "22"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "SNA",
		"cnt": "80"
	},
	{
		"airline": "YV",
		"airport1": "BTV",
		"airport2": "ORD",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "MDT",
		"airport2": "ORD",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "MRY",
		"airport2": "PHX",
		"cnt": "116"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "PVD",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "ELP",
		"airport2": "PHX",
		"cnt": "247"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "SYR",
		"cnt": "72"
	},
	{
		"airline": "YV",
		"airport1": "CHS",
		"airport2": "CLT",
		"cnt": "208"
	},
	{
		"airline": "YV",
		"airport1": "HNL",
		"airport2": "LIH",
		"cnt": "324"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "SAV",
		"cnt": "120"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "SAT",
		"cnt": "102"
	},
	{
		"airline": "YV",
		"airport1": "BDL",
		"airport2": "IAD",
		"cnt": "80"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "SYR",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "CLE",
		"airport2": "CLT",
		"cnt": "160"
	},
	{
		"airline": "YV",
		"airport1": "SAT",
		"airport2": "IAD",
		"cnt": "34"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "IND",
		"cnt": "8"
	},
	{
		"airline": "YV",
		"airport1": "ATW",
		"airport2": "ORD",
		"cnt": "2"
	},
	{
		"airline": "YV",
		"airport1": "MHT",
		"airport2": "ORD",
		"cnt": "55"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "PWM",
		"cnt": "34"
	},
	{
		"airline": "YV",
		"airport1": "DSM",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "MCI",
		"cnt": "56"
	},
	{
		"airline": "YV",
		"airport1": "IAD",
		"airport2": "RDU",
		"cnt": "88"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "PIT",
		"cnt": "22"
	},
	{
		"airline": "YV",
		"airport1": "MCI",
		"airport2": "PHX",
		"cnt": "16"
	},
	{
		"airline": "YV",
		"airport1": "AUS",
		"airport2": "CLT",
		"cnt": "160"
	},
	{
		"airline": "YV",
		"airport1": "FAT",
		"airport2": "PHX",
		"cnt": "232"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "SYR",
		"cnt": "64"
	},
	{
		"airline": "YV",
		"airport1": "AUS",
		"airport2": "PHX",
		"cnt": "224"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "RDU",
		"cnt": "125"
	},
	{
		"airline": "YV",
		"airport1": "PHX",
		"airport2": "TUS",
		"cnt": "480"
	},
	{
		"airline": "YV",
		"airport1": "ORD",
		"airport2": "PHL",
		"cnt": "64"
	},
	{
		"airline": "YV",
		"airport1": "DAY",
		"airport2": "ORD",
		"cnt": "43"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "ORF",
		"cnt": "148"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "ORD",
		"cnt": "174"
	},
	{
		"airline": "YV",
		"airport1": "AUS",
		"airport2": "IAD",
		"cnt": "33"
	},
	{
		"airline": "YV",
		"airport1": "OMA",
		"airport2": "PHX",
		"cnt": "36"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "JAX",
		"cnt": "28"
	},
	{
		"airline": "YV",
		"airport1": "DRO",
		"airport2": "PHX",
		"cnt": "112"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "MSY",
		"cnt": "24"
	},
	{
		"airline": "YV",
		"airport1": "DFW",
		"airport2": "ORD",
		"cnt": "50"
	},
	{
		"airline": "YV",
		"airport1": "CLT",
		"airport2": "MSP",
		"cnt": "4"
	}
];
