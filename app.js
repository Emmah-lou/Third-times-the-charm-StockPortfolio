var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_React$Component) {
  _inherits(Portfolio, _React$Component);

  function Portfolio(props) {
    _classCallCheck(this, Portfolio);

    var _this = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));

    _this.state = {
      portfolio: [{
        name: "Feetbook",
        shares_owned: 50,
        cost_per_share: 100,
        market_price: 200
      }, {
        name: "Yamazon",
        shares_owned: 10,
        cost_per_share: 100,
        market_price: 200
      }, {
        name: "Snoozechat",
        shares_owned: 30,
        cost_per_share: 100,
        market_price: 200
      }],
      form: {
        name: "",
        shares_owned: 0,
        cost_per_share: 0,
        market_price: 0

      }
    };
    _this.removeStock = _this.removeStock.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.addStock = _this.addStock.bind(_this);
    _this.handleFormChange = _this.handleFormChange.bind(_this);
    return _this;
  }

  _createClass(Portfolio, [{
    key: "handleFormChange",
    value: function handleFormChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;
      var form = this.state.form;


      form[name] = value;
      this.setState({ form: form });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event, index) {
      var portfolio = this.state.portfolio.slice();
      var _event$target2 = event.target,
          name = _event$target2.name,
          value = _event$target2.value;


      portfolio[index][name] = value;
      this.setState({ portfolio: portfolio });
    }
  }, {
    key: "addStock",
    value: function addStock(event) {
      event.preventDefault();
      var portfolio = this.state.portfolio.slice();

      portfolio.push(this.state.form);
      this.setState({
        portfolio: portfolio,
        form: {
          name: '',
          shares_owned: 0,
          cost_per_share: 0,
          market_price: 0
        }
      });
    }
  }, {
    key: "removeStock",
    value: function removeStock(index) {
      var portfolio = this.state.portfolio.slice();
      portfolio.splice(index, 1);
      this.setState({ portfolio: portfolio });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var portfolio = this.state.portfolio;
      var form = this.state.form;


      var portfolio_market_value = portfolio.reduce(function (acc, stock) {
        return stock.shares_owned * stock.market_price + acc;
      }, 0);
      var portfolio_cost = portfolio.reduce(function (acc, stock) {
        return stock.shares_owned * stock.cost_per_share + acc;
      }, 0);
      var portfolio_unrealized_gain_loss = portfolio_market_value - portfolio_cost;

      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h1",
          { className: "text-center my-4" },
          "Stock Portfolio"
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-12" },
            React.createElement(
              "table",
              { className: "table table-responsive" },
              React.createElement(
                "thead",
                null,
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "th",
                    { scope: "col" },
                    "Name"
                  ),
                  React.createElement(
                    "th",
                    { scope: "col" },
                    "Shares Owned"
                  ),
                  React.createElement(
                    "th",
                    { scope: "col" },
                    "Cost Per Share ($)"
                  ),
                  React.createElement(
                    "th",
                    { scope: "col" },
                    "Market Price ($)"
                  ),
                  React.createElement(
                    "th",
                    { scope: "col" },
                    "Market Value ($)"
                  ),
                  React.createElement(
                    "th",
                    { scope: "col" },
                    "Unrealized Gain/Loss ($)"
                  ),
                  React.createElement("th", { scope: "col" })
                )
              ),
              React.createElement(
                "tbody",
                null,
                portfolio.map(function (stock, index) {
                  var name = stock.name,
                      shares_owned = stock.shares_owned,
                      cost_per_share = stock.cost_per_share,
                      market_price = stock.market_price;

                  var market_Value = shares_owned * market_price;
                  var unrealized_gain_loss = market_Value - shares_owned * cost_per_share;
                  return React.createElement(
                    "tr",
                    { key: index },
                    React.createElement(
                      "td",
                      null,
                      name
                    ),
                    React.createElement(
                      "td",
                      null,
                      React.createElement("input", { onChange: function onChange(e) {
                          return _this2.handleChange(e, index);
                        }, type: "number", name: "shares_owned", value: shares_owned })
                    ),
                    React.createElement(
                      "td",
                      null,
                      React.createElement("input", { onChange: function onChange(e) {
                          return _this2.handleChange(e, index);
                        }, type: "number", name: "cost_per_share", value: cost_per_share })
                    ),
                    React.createElement(
                      "td",
                      null,
                      React.createElement("input", { onChange: function onChange(e) {
                          return _this2.handleChange(e, index);
                        }, type: "number", name: "market_price", value: market_price })
                    ),
                    React.createElement(
                      "td",
                      null,
                      market_Value
                    ),
                    React.createElement(
                      "td",
                      null,
                      unrealized_gain_loss
                    ),
                    React.createElement(
                      "td",
                      null,
                      React.createElement(
                        "button",
                        { onClick: function onClick() {
                            return _this2.removeStock(index);
                          }, className: "btn btn-danger" },
                        "Delete"
                      )
                    )
                  );
                })
              )
            )
          ),
          React.createElement(
            "form",
            { className: "col-12 mt-2 mb-4", onSubmit: this.addStock },
            React.createElement("input", {
              className: "mx-2",
              name: "name",
              type: "text",
              placeholder: "Name",
              onChange: this.handleFormChange,
              value: form.name,
              required: true
            }),
            React.createElement("input", {
              className: "mx-2",
              name: "shares_owned",
              type: "number",
              placeholder: "Shares",
              value: form.shares_owned,
              onChange: this.handleFormChange
            }),
            React.createElement("input", {
              className: "mx-2",
              name: "cost_per_share",
              type: "number",
              placeholder: "Cost",
              value: form.cost_per_share,
              onChange: this.handleFormChange
            }),
            React.createElement("input", {
              className: "mx-2",
              name: "market_price",
              type: "number",
              placeholder: "Price",
              value: form.market_price,
              onChange: this.handleFormChange
            }),
            React.createElement(
              "button",
              { className: "btn btn-primary btn-sm" },
              "add"
            )
          ),
          React.createElement(
            "div",
            { className: "col-12 col-md-6" },
            React.createElement(
              "h4",
              { className: "mb-3" },
              "Portfolio value: $ ",
              portfolio_market_value
            )
          ),
          React.createElement(
            "div",
            { className: "col-12 col-md-6" },
            React.createElement(
              "h4",
              { className: "mb-3" },
              "Porfolio gain/loss: $ ",
              portfolio_unrealized_gain_loss
            )
          )
        )
      );
    }
  }]);

  return Portfolio;
}(React.Component);

var Main = function Main() {
  return React.createElement(
    "div",
    null,
    React.createElement(Portfolio, null)
  );
};

ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));