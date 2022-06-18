"""
This python file is hosted in Google Functions and is triggered
by TradingView's alerts pointing to it's URL

"""

def append_to_googlesheet(data_json):
    import gspread
    import datetime
    from oauth2client.service_account import ServiceAccountCredentials
    # defining the scope of the application
    scope_app = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']

    #credentials to the account
    cred = ServiceAccountCredentials.from_json_keyfile_name('stonk-webapp-0e6911b63eb3.json',scope_app)
    # authorize the clientsheet
    client = gspread.authorize(cred)
    # Opens the worksheet
    sheet = client.open('Tradingview-Indicators')
    # get the first page
    wks = sheet.get_worksheet(0)
    now = datetime.datetime.now()
    timestamp = now.strftime("%Y-%m-%d %H:%M:%S")


    symbol_list = wks.col_values(1)
    row_counter = 0
    found = False
    for symbol in symbol_list:
        row_counter += 1
        if data_json['ticker'] == symbol:
            print('found duplicate on row ', row_counter)
            wks.update_cell(row_counter, 1, data_json['ticker'])
            wks.update_cell(row_counter, 2, data_json['signal'])
            wks.update_cell(row_counter, 3, data_json['exchange'])
            wks.update_cell(row_counter, 4, str(timestamp))
            found = True
    print(found)
    if found == False:
        wks.append_row(wks.append_row([data_json['ticker'],data_json['signal'],data_json['exchange'],str(timestamp)]))
    return True

def hello_world(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """

    request_json = request.get_json()
    append_to_googlesheet(request_json)
