#!/bin/bash

WHITE='\033[1;37m';
GREEN='\033[1;32m';
RED='\033[1;31m';
NC='\033[0m';

TOTAL_TESTS=0;
TOTAL_PASS=0;
TOTAL_FAIL=0;

TEST_DIR=$(dirname "$0");
cd $TEST_DIR;

if [[ -z "$(curl -sI localhost:5000)" ]]; then
    echo;
    echo -e "${RED}# server is not running; exiting${NC}";
    exit 1;
fi;

echo;
echo -e "${WHITE}# test known routes GET response${NC}";
for route in $(cat routes.txt); do
    headers=$(curl -sI localhost:5000/$route);

    echo "# GET /$route";

    TOTAL_TESTS=$((TOTAL_TESTS + 1));
    if [[ $headers =~ "200 OK" ]]; then
        TOTAL_PASS=$((TOTAL_PASS + 1));
        echo -n -e "${GREEN}OK${NC}";
    else
        TOTAL_FAIL=$((TOTAL_FAIL + 1));
        echo -n -e "${RED}NOT OK${NC}";
    fi;
    echo " - returns 200 OK";

    TOTAL_TESTS=$((TOTAL_TESTS + 1));
    if [[ $headers =~ "application/json" ]]; then
        TOTAL_PASS=$((TOTAL_PASS + 1));
        echo -n -e "${GREEN}OK${NC}";
    else
        TOTAL_FAIL=$((TOTAL_FAIL + 1));
        echo -n -e "${RED}NOT OK${NC}";
    fi;
    echo " - returns content-type application/json";
done


echo;
echo -e "${WHITE}# test unknown route GET response${NC}";
headers=$(curl -sI localhost:5000/unknown);

echo "# GET /unknown";

TOTAL_TESTS=$((TOTAL_TESTS + 1));
if [[ $headers =~ "404 Not Found" ]]; then
    TOTAL_PASS=$((TOTAL_PASS + 1));
    echo -n -e "${GREEN}OK${NC}";
else
    TOTAL_FAIL=$((TOTAL_FAIL + 1));
    echo -n -e "${RED}NOT OK${NC}";
fi;
echo " - returns 404 Not Found";

TOTAL_TESTS=$((TOTAL_TESTS + 1));
if [[ $headers =~ "text/plain" ]]; then
    TOTAL_PASS=$((TOTAL_PASS + 1));
    echo -n -e "${GREEN}OK${NC}";
else
    TOTAL_FAIL=$((TOTAL_FAIL + 1));
    echo -n -e "${RED}NOT OK${NC}";
fi;
echo " - returns content-type text/plain";


echo;
echo -e "${WHITE}# test known routes POST/PUT/DELETE response${NC}";
for route in $(cat routes.txt); do
    for method in POST PUT DELETE; do
        headers=$(curl -sI -X $method localhost:5000/$route);

        echo "# $method /$route";

        TOTAL_TESTS=$((TOTAL_TESTS + 1));
        if [[ $headers =~ "400 Bad Request" ]]; then
            TOTAL_PASS=$((TOTAL_PASS + 1));
            echo -n -e "${GREEN}OK${NC}";
        else
            TOTAL_FAIL=$((TOTAL_FAIL + 1));
            echo -n -e "${RED}NOT OK${NC}";
        fi;
        echo " - returns 400 Bad Request";

        TOTAL_TESTS=$((TOTAL_TESTS + 1));
        if [[ $headers =~ "text/plain" ]]; then
            TOTAL_PASS=$((TOTAL_PASS + 1));
            echo -n -e "${GREEN}OK${NC}";
        else
            TOTAL_FAIL=$((TOTAL_FAIL + 1));
            echo -n -e "${RED}NOT OK${NC}";
        fi;
        echo " - returns content-type text/plain";
    done
done

echo;
echo -e "${WHITE}TOTAL TESTS: ${NC} $TOTAL_TESTS";
echo -e "${WHITE}TOTAL PASS: ${NC} $TOTAL_PASS";
echo -e "${WHITE}TOTAL FAIL: ${NC} $TOTAL_FAIL";
echo;

if [[ "$TOTAL_FAIL" -gt "0" ]]; then
    exit 1;
else
    exit 0;
fi;
