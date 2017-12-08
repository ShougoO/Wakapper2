#!/bin/bash

# cgi-nameなどのスクリプトの
# 言語とパスの設定
LANG=js_JP.UTF-8
PATH=/usr/local/bin:$PATH

pag2=/home/dshougo/Wakapper/Wakapper/src/pages/page2
homd=/home/dshougo/Wakapper/Wakapper/src
logd=$homd/log

tmp=$pag2/tmp_$$

exec 2> $logd/LOG.$(basename $0).$(date +%Y%m%d)

dd bs=$CONTENT_LENGTH   |
cgi-name -i _ -d_       > $tmp-name

Comments=$(nameread comments $tmp-name)

echo "{\"comments\":\"$Comments\"}" > $pag2/comment.$(date +%Y%m%d_%H%M%S).$$.json
# echo "Content-type: text/html"
echo "Location: $HTTP_REFERER?q=subm"
echo ""

rm -f $tmp-*
